const db = require("../../../shared/db/db");

class OrderRepository {
    async create(order) {
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
    }
}

module.exports = new OrderRepository();