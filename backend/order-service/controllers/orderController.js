const orderService = require("../services/orderService");

class OrderController {
    async create(req, res) {
        try {
            const { userId, productId, quantity } = req.body;
            const order = await orderService.createOrder(userId, productId, quantity);
            res.json(order);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new OrderController();