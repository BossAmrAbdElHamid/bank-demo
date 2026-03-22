const eventBus = require("../../shared/events/eventBus");
const paymentService = require("./services/paymentService");

eventBus.subscribe("order_created", (event) =>
    paymentService.process(event)
);

console.log("Payment Service running");