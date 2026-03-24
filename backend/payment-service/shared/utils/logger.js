const db = require("../db/db");
const { v4: uuidv4 } = require("uuid");

class Logger {
    async log(service, level, message, correlationId = null) {
        await db.query(
            `INSERT INTO logs (idlogs, service_name, level, message, correlation_id)
             VALUES (?, ?, ?, ?, ?)`,
            [uuidv4(), service, level, message, correlationId]
        );
    }
}

module.exports = new Logger();