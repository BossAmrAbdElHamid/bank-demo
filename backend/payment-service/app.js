const eventBus = require("../../shared/events/eventBusServer");
const paymentService = require("./services/paymentService");

console.log("\n=====================================");
console.log("💳 PAYMENT SERVICE STARTING");
console.log("=====================================");

// Subscribe to events
eventBus.subscribe("order_created", async (event) => {
    console.log("\n💳 [Payment Service] Received order_created event");
    await paymentService.process(event);
});

console.log("✅ Payment Service subscribed to: order_created");
console.log("💳 Payment Service listening for events...");
console.log("=====================================\n");

// Keep the process alive indefinitely
setInterval(() => {
    // This empty interval keeps the process running
}, 1000);

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n💳 Payment Service shutting down...');
    process.exit(0);
});