const eventBus = require("./shared/events/eventBusKafka");  // ✅ KAFKA
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