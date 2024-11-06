import { Pool } from 'pg';

export default class ConnectToDatabase {
  
  private pool: Pool;

  constructor() {
   
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'deneme',
      password: '12345',
      port: 5432, 
    });
  }

  public async connectToDatabase() {
    try {
      const client = await this.pool.connect();
      console.log('Database connection successful');
      client.release();
    } catch (error) {
      console.error('Database connection failed', error);
      process.exit(1);
    }
  }
}
