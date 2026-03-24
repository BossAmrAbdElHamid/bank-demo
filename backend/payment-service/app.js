const eventBus = require("./shared/events/eventBusKafka");  // ✅ KAFKA
const paymentService = require("./services/paymentService");

console.log("\n=====================================");
console.log("💳 PAYMENT SERVICE STARTING");
console.log("=====================================");

eventBus.subscribe("order_created", async (event) => {
    console.log("\n💳 [Payment Service] Received order_created event");
    await paymentService.process(event);
});

console.log("✅ Payment Service listening for events...");
console.log("=====================================\n");

setInterval(() => {}, 1000);

process.on('SIGINT', async () => {
    console.log('\n💳 Payment Service shutting down...');
    await eventBus.disconnect();
    process.exit(0);
});