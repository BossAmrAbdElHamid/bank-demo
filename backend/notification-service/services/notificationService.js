const db = require("../../../shared/db/db");
const { v4: uuidv4 } = require("uuid");

class NotificationService {
    async handle(event) {
        await db.query(
            `INSERT INTO notifications 
            (idnotifications, user_id, type, message, status)
            VALUES (?, ?, ?, ?, ?)`,
            [
                uuidv4(),
                event.data.user_id,
                "EMAIL",
                "Your order has been processed",
                "SENT"
            ]
        );
    }
}

module.exports = new NotificationService();