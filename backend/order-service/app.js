const express = require("express");
const app = express();
const orderController = require("./controllers/orderController");

// Import the shared EventBus
const eventBus = require("../../shared/events/eventBusKafka");

app.use(express.json());

app.post("/orders", (req, res) => orderController.create(req, res));

console.log("\n=====================================");
console.log("📦 ORDER SERVICE STARTING");
console.log("=====================================");
console.log("✅ Order Service using shared EventBus");
console.log("📦 Order Service running on port 3001");
console.log("=====================================\n");

app.listen(3001, () => {
    console.log("📦 Listening for requests...");
});

// Keep process alive
setInterval(() => {}, 1000);

process.on('SIGINT', () => {
    console.log('\n📦 Order Service shutting down...');
    process.exit(0);
});