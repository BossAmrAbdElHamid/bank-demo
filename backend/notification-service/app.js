/*const eventBus = require("../../shared/events/eventBusServer");  // ✅ Shared EventBus
const logger = require("../../shared/utils/logger");

console.log("\n=====================================");
console.log("🔔 NOTIFICATION SERVICE STARTING");
console.log("=====================================");

eventBus.subscribe("order_created", async (event) => {
    try {
        console.log("\n🔔 [Notification Service] Received order_created event");
        console.log(`   Order ID: ${event.data.id}`);
        console.log(`   User ID: ${event.data.user_id}`);
        console.log(`   Total: $${event.data.totalprice}`);
        
        // Simulate sending notification
        console.log("📧 Sending email notification...");
        
        await logger.log("notification-service", "INFO", 
            `Notification sent for order ${event.data.id}`);
        
        console.log("✅ Notification sent successfully\n");
    } catch (error) {
        console.error("❌ [Notification Service] Error:", error.message);
        await logger.log("notification-service", "ERROR", error.message);
    }
});

console.log("✅ Notification Service subscribed to: order_created");
console.log("🔔 Notification Service listening for events...");
console.log("✅ Current subscriptions:", eventBus.getSubscriptions());
console.log("=====================================\n");

// Keep the process alive indefinitely
setInterval(() => {}, 1000);

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🔔 Notification Service shutting down...');
    process.exit(0);
});*/

const eventBus = require("../../shared/events/eventBusKafka");  // ✅ KAFKA
const notificationService = require("./services/notificationService");

console.log("\n=====================================");
console.log("🔔 NOTIFICATION SERVICE STARTING");
console.log("=====================================");

eventBus.subscribe("order_created", async (event) => {
    try {
        console.log("\n🔔 [Notification Service] Received event");
        await notificationService.handle(event);
        console.log("✅ Notification saved\n");
    } catch (error) {
        console.error("❌ Error:", error.message);
    }
});

console.log("✅ Notification Service listening...");
console.log("=====================================\n");

setInterval(() => {}, 1000);

process.on('SIGINT', async () => {
    console.log('\n🔔 Notification Service shutting down...');
    await eventBus.disconnect();
    process.exit(0);
});