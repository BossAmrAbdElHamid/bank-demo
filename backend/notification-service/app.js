const eventBus = require("../../shared/events/eventBus");
const notificationService = require("./services/notificationService");

eventBus.subscribe("order_created", (event) =>
    notificationService.handle(event)
);

console.log("Notification Service running");