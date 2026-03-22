const db = require("../../../shared/db/db");

class OrderRepository {
    async create(order) {
        // Validate all required fields
        console.log("📝 Creating order with data:", order);
        
        if (!order.id) {
            throw new Error("Order ID is undefined");
        }
        if (!order.user_id) {
            throw new Error("User ID is undefined");
        }
        if (!order.product_id) {
            throw new Error("Product ID is undefined");
        }
        if (order.quantity === undefined || order.quantity === null) {
            throw new Error("Quantity is undefined");
        }
        if (order.unitprice === undefined || order.unitprice === null) {
            throw new Error("Unit price is undefined");
        }
        if (order.totalprice === undefined || order.totalprice === null) {
            throw new Error("Total price is undefined");
        }
        if (!order.status) {
            throw new Error("Status is undefined");
        }

        try {
            await db.query(
                `INSERT INTO orders 
                (idorders, user_id, product_id, quantity, unitprice, totalprice, status)
                VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [
                    order.id,
                    order.user_id,
                    order.product_id,
                    order.quantity,
                    order.unitprice,
                    order.totalprice,
                    order.status
                ]
            );
            console.log("✅ Order inserted successfully");
        } catch (error) {
            console.error("❌ Database insert error:", error.message);
            throw error;
        }
    }
}

module.exports = new OrderRepository();