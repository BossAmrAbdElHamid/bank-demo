const db = require("../shared/db/db");
const { v4: uuidv4 } = require("uuid");
const logger = require("../shared/utils/logger");

class NotificationService {
    async handle(event) {
        try {
            // Insert into notifications table
            await db.query(
                `INSERT INTO notifications 
                (idnotifications, user_id, type, message, status)
                VALUES (?, ?, ?, ?, ?)`,
                [
                    uuidv4(),
                    event.data.user_id,
                    "EMAIL",
                    `Order ${event.data.id} has been created for $${event.data.totalprice}`,
                    "SENT"
                ]
            );

            // Log to logs table
            await logger.log(
                "notification-service", 
                "INFO", 
                `Notification sent | Channel EMAIL | Order# ${event.data.id} to user ${event.data.user_id}`
            );

            console.log("✅ Notification saved and logged");
        } catch (error) {
            console.error("❌ Notification Service Error:", error.message);
            
            // Log error to logs table
            await logger.log(
                "notification-service",
                "ERROR",
                error.message
            );
            
            throw error;
        }
    }
}

module.exports = new NotificationService();