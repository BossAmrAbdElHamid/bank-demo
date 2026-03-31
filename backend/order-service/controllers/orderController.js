const orderService = require("../services/orderService");

class OrderController {
    async create(req, res) {
        try {
            console.log("📨 Received order request:", req.body);
            const { userId, productId, quantity } = req.body;

            // Validate input
            if (!userId) {
                return res.status(400).json({ error: "userId is required" });
            }
            if (!productId) {
                return res.status(400).json({ error: "productId is required" });
            }
            if (!quantity) {
                return res.status(400).json({ error: "quantity is required" });
            }

            const order = await orderService.createOrder(userId, productId, quantity);
            console.log("✔️ Response sent to client:", order);
            res.json(order);
        } catch (err) {
            console.error("❌ Error in controller:", err.message);
            
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new OrderController();