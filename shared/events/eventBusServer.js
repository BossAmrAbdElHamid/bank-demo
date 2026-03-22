const eventEmitter = require("events");

class EventBusServer extends eventEmitter {
    constructor() {
        super();
        this.subscribers = {};
        this.publishedEvents = [];
        console.log("🚀 EventBus initialized");
    }

    subscribe(eventType, handler) {
        if (!this.subscribers[eventType]) {
            this.subscribers[eventType] = [];
        }
        this.subscribers[eventType].push(handler);
        console.log(`📋 [EventBus] Subscribed to event type: "${eventType}"`);
        console.log(`   Total subscribers for "${eventType}": ${this.subscribers[eventType].length}`);
    }

    async publish(event) {
        // Validate event
        if (!event.eventId) {
            console.error("❌ [EventBus] Event missing eventId:", event);
            return;
        }
        if (!event.type) {
            console.error("❌ [EventBus] Event missing type:", event);
            return;
        }

        console.log(`\n📤 [EventBus] Publishing event: "${event.type}"`);
        console.log(`   Event ID: ${event.eventId}`);
        
        const handlers = this.subscribers[event.type] || [];
        console.log(`   ✅ Found ${handlers.length} subscribers for "${event.type}"`);
        
        if (handlers.length === 0) {
            console.warn(`   ⚠️  WARNING: No subscribers for event type "${event.type}"`);
        }
        
        for (const handler of handlers) {
            try {
                await handler(event);
            } catch (error) {
                console.error(`❌ [EventBus] Error in event handler for ${event.type}:`, error.message);
            }
        }
    }

    // Get all subscriptions for debugging
    getSubscriptions() {
        return Object.keys(this.subscribers).reduce((acc, type) => {
            acc[type] = this.subscribers[type].length;
            return acc;
        }, {});
    }
}

module.exports = new EventBusServer();