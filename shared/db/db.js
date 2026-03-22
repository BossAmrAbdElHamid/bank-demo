const mysql = require("mysql2/promise");

class Database {
    constructor() {
        this.pool = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "**********",
            database: "bank_demo",
            waitForConnections: true,
            connectionLimit: 10
        });
    }

    async query(sql, params) {
        const [rows] = await this.pool.execute(sql, params);
        return rows;
    }
}

module.exports = new Database();