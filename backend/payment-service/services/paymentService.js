const db = require("../../../shared/db/db");
const logger = require("../../../shared/utils/logger");

class PaymentService {
    constructor() {
        this.failureCount = 0;
        this.threshold = 3;
    }

    async process(event) {
        const exists = await db.query(
            "SELECT * FROM processed_events WHERE event_id = ?",
            [event.eventId]
        );

        if (exists.length) return;

        if (this.failureCount >= this.threshold) {
            await logger.log("payment-service", "ERROR", "Circuit breaker open");
            return;
        }

        try {
            // simulate payment
            await db.query(
                "UPDATE orders SET status = 'PAID' WHERE idorders = ?",
                [event.data.id]
            );

            await db.query(
                "INSERT INTO processed_events (event_id) VALUES (?)",
                [event.eventId]
            );

            this.failureCount = 0;

        } catch (err) {
            this.failureCount++;
            await logger.log("payment-service", "ERROR", err.message);
        }
    }
}

module.exports = new PaymentService();