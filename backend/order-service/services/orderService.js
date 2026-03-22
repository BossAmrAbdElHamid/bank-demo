const { v4: uuidv4 } = require("uuid");
const orderRepo = require("../repositories/orderRepository");
const db = require("../../../shared/db/db");
const eventBus = require("../../../shared/events/eventBus");
const logger = require("../../../shared/utils/logger");

class OrderService {
    async createOrder(userId, productId, quantity) {
        const product = await db.query(
            "SELECT * FROM products WHERE idproducts = ?",
            [productId]
        );

        if (!product.length) throw new Error("Product not found");

        const unitPrice = product[0].productprice;
        const totalPrice = unitPrice * quantity;

        const order = {
            id: uuidv4(),
            user_id: userId,
            product_id: productId,
            quantity,
            unitprice: unitPrice,
            totalprice: totalPrice,
            status: "CREATED"
        };

        await orderRepo.create(order);

        const event = {
            eventId: uuidv4(),
            type: "order_created",
            data: order
        };

        await eventBus.publish(event);

        await logger.log("order-service", "INFO", "Order created");

        return order;
    }
}

module.exports = new OrderService();