const { v4: uuidv4 } = require("uuid");
const orderRepo = require("../repositories/orderRepository");
const db = require("../shared/db/db");
const eventBus = require("../shared/events/eventBusKafka");  // ✅ KAFKA
const logger = require("../shared/utils/logger");

class OrderService {
    async createOrder(userId, productId, quantity) {
        try {
            console.log("\n📦 [Order Service] Creating order...");

            const product = await db.query(
                "SELECT * FROM products WHERE idproducts = ?",
                [productId]
            );

            if (!product || product.length === 0) {
                throw new Error(`Product not found`);
            }

            const unitPrice = product[0].productprice;
            const order = {
                id: uuidv4(),
                user_id: userId,
                product_id: productId,
                quantity: parseInt(quantity),
                unitprice: parseFloat(unitPrice),
                totalprice: parseFloat(unitPrice * quantity),
                status: "CREATED"
            };

            await orderRepo.create(order);

            const event = {
                eventId: uuidv4(),
                type: "order_created",
                data: order
            };

            await eventBus.publish(event);
            await logger.log("order-service", "INFO", `Order created`);

            return order;
        } catch (error) {
            console.error("❌ Error:", error.message);
            throw error;
        }
    }
}

module.exports = new OrderService();