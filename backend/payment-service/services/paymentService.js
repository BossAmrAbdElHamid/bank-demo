const db = require("../../../shared/db/db");
const logger = require("../../../shared/utils/logger");

class PaymentService {
    constructor() {
        this.failureCount = 0;
        this.threshold = 3;
    }

    async process(event) {
        console.log("💳 [Payment Service] Processing payment for order:", event.data.id);
        
        // Validate event
        if (!event.eventId) {
            console.error("❌ Event missing eventId");
            return;
        }
        
        try {
            // Check if already processed
            const exists = await db.query(
                "SELECT * FROM processed_events WHERE event_id = ?",
                [event.eventId]
            );

            if (exists.length) {
                console.log("⚠️  Event already processed (idempotency)");
                return;
            }

            // Check circuit breaker
            if (this.failureCount >= this.threshold) {
                console.log("🚫 Circuit breaker open - too many failures");
                await logger.log("payment-service", "ERROR", "Circuit breaker open");
                return;
            }

            // Update order status to PAID
            console.log("💰 Updating order status to PAID...");
            await db.query(
                "UPDATE orders SET status = 'PAID' WHERE idorders = ?",
                [event.data.id]
            );

            // Record event as processed
            console.log("📝 Recording processed event...");
            await db.query(
                "INSERT INTO processed_events (event_id) VALUES (?)",
                [event.eventId]
            );

            this.failureCount = 0;
            await logger.log("payment-service", "INFO", `Payment processed for order ${event.data.id}`);
            console.log("✅ Payment processed successfully\n");

        } catch (err) {
            this.failureCount++;
            console.error("❌ Payment processing failed:", err.message);
            await logger.log("payment-service", "ERROR", err.message);
        }
    }
}

module.exports = new PaymentService();