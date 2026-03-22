class EventBus {
    constructor() {
        this.subscribers = {};
    }

    subscribe(eventType, handler) {
        if (!this.subscribers[eventType]) {
            this.subscribers[eventType] = [];
        }
        this.subscribers[eventType].push(handler);
    }

    async publish(event) {
        const handlers = this.subscribers[event.type] || [];
        for (const handler of handlers) {
            await handler(event);
        }
    }
}

module.exports = new EventBus();