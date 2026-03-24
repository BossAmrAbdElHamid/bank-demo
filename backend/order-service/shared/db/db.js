const mysql = require("mysql2/promise");

class Database {
    constructor() {
        this.pool = mysql.createPool({
            host: "localhost",
            user: "root",          // Change this if your MySQL user is different
            password: "maverick977",  // Replace with your actual MySQL password
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