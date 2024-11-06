"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
class ConnectToDatabase {
    pool;
    constructor() {
        this.pool = new pg_1.Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'deneme',
            password: '12345',
            port: 5432,
        });
    }
    async connectToDatabase() {
        try {
            const client = await this.pool.connect();
            console.log('Database connection successful');
            client.release();
        }
        catch (error) {
            console.error('Database connection failed', error);
            process.exit(1);
        }
    }
}
exports.default = ConnectToDatabase;
