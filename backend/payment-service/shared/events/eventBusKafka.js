const { Kafka } = require('kafkajs');

class KafkaEventBus {
    constructor() {
        this.serviceName = process.env.SERVICE_NAME || 'unknown-service';
        
        this.kafka = new Kafka({
            clientId: `bank-demo-${this.serviceName}`,
            brokers: ['localhost:9092']
        });
        this.producer = this.kafka.producer();
        // ✅ Each service gets unique groupId
        this.consumer = this.kafka.consumer({ 
            groupId: `${this.serviceName}-service-group`
        });
        this.subscribers = {};
        this.initialized = false;
        
        console.log(`🚀 KafkaEventBus initializing (Service: ${this.serviceName})`);
        this.init();
    }

    async init() {
        try {
            await this.producer.connect();
            await this.consumer.connect();
            this.initialized = true;
            console.log(`✅ KafkaEventBus ready (Group: ${this.serviceName}-service-group)`);
            
            await this.startConsuming();
        } catch (error) {
            console.error("❌ KafkaEventBus init error:", error.message);
        }
    }

    subscribe(eventType, handler) {
        if (!this.subscribers[eventType]) {
            this.subscribers[eventType] = [];
        }
        this.subscribers[eventType].push(handler);
        console.log(`📋 [KafkaEventBus] Subscribed to: "${eventType}"`);
        console.log(`   Total subscribers: ${this.subscribers[eventType].length}`);
    }

    async publish(event) {
        if (!this.initialized) {
            console.error("❌ KafkaEventBus not initialized");
            return;
        }

        try {
            console.log(`\n📤 [KafkaEventBus] Publishing to topic: "${event.type}"`);
            console.log(`   Event ID: ${event.eventId}`);
            
            await this.producer.send({
                topic: event.type,
                messages: [
                    {
                        key: event.eventId,
                        value: JSON.stringify(event),
                        headers: {
                            'event-id': event.eventId,
                            'timestamp': new Date().toISOString()
                        }
                    }
                ]
            });
            
            console.log("✅ Event published to Kafka");
        } catch (error) {
            console.error("❌ Error publishing to Kafka:", error.message);
        }
    }

    async startConsuming() {
        const topics = Object.keys(this.subscribers);
        
        if (topics.length === 0) {
            console.log("⚠️  No topics to subscribe to");
            return;
        }

        try {
            await this.consumer.subscribe({ topics, fromBeginning: false });
            
            await this.consumer.run({
                eachMessage: async ({ topic, partition, message }) => {
                    try {
                        const event = JSON.parse(message.value.toString());
                        
                        console.log(`\n📥 [KafkaEventBus] Received event: "${topic}"`);
                        console.log(`   Event ID: ${event.eventId}`);
                        console.log(`   Service: ${this.serviceName}`);
                        
                        const handlers = this.subscribers[topic] || [];
                        
                        for (const handler of handlers) {
                            try {
                                await handler(event);
                            } catch (error) {
                                console.error(`❌ Error handling event:`, error.message);
                            }
                        }
                    } catch (error) {
                        console.error("❌ Error processing message:", error.message);
                    }
                }
            });
        } catch (error) {
            console.error("❌ Error in consumer:", error.message);
        }
    }

    getSubscriptions() {
        return Object.keys(this.subscribers).reduce((acc, type) => {
            acc[type] = this.subscribers[type].length;
            return acc;
        }, {});
    }

    async disconnect() {
        await this.producer.disconnect();
        await this.consumer.disconnect();
    }
}

module.exports = new KafkaEventBus();