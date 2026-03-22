const { v4: uuidv4 } = require("uuid");
const orderRepo = require("../repositories/orderRepository");
const db = require("../../../shared/db/db");
const eventBus = require("../../../shared/events/eventBusServer");
const logger = require("../../../shared/utils/logger");

class OrderService {
    async createOrder(userId, productId, quantity) {
        try {
            console.log("\n📦 [Order Service] Creating order...");
            console.log(`   User ID: ${userId}`);
            console.log(`   Product ID: ${productId}`);
            console.log(`   Quantity: ${quantity}`);

            // Fetch product
            const product = await db.query(
                "SELECT * FROM products WHERE idproducts = ?",
                [productId]
            );

            if (!product || product.length === 0) {
                throw new Error(`Product not found: ${productId}`);
            }

            const unitPrice = product[0].productprice;
            const totalPrice = unitPrice * quantity;

            const order = {
                id: uuidv4(),
                user_id: userId,
                product_id: productId,
                quantity: parseInt(quantity),
                unitprice: parseFloat(unitPrice),
                totalprice: parseFloat(totalPrice),
                status: "CREATED"
            };

            // Save to database
            await orderRepo.create(order);
            console.log("✅ Order saved to database");

            // Create and publish event
            const eventId = uuidv4();
            const event = {
                eventId: eventId,
                type: "order_created",
                data: order
            };

            console.log("📤 Publishing order_created event to EventBus...");
            console.log(`   Current subscribers:`, eventBus.getSubscriptions());
            
            await eventBus.publish(event);

            await logger.log("order-service", "INFO", `Order ${order.id} created`);
            console.log("✅ Order created successfully\n");

            return order;
        } catch (error) {
            console.error("❌ Error in createOrder:", error.message);
            throw error;
        }
    }
}

module.exports = new OrderService();