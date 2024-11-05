import { Pool } from 'pg';

export default class ConnectToDatabase {
  // PostgreSQL DataSource yapılandırması
  private pool: Pool;

  constructor() {
    // Pool yapılandırmasını başlat
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'deneme',
      password: '12345',
      port: 5432, // Varsayılan PostgreSQL portu
    });
  }

  // Veritabanı bağlantısını kontrol eden bir fonksiyon
  public async connectToDatabase() {
    try {
      const client = await this.pool.connect();
      console.log('Database connection successful');
      client.release();
    } catch (error) {
      console.error('Database connection failed', error);
      process.exit(1); // Bağlantı başarısız olursa uygulamayı kapat
    }
  }

  // Sunucuyu başlat
  public async startServer() {
    try {
      // Veritabanına bağlan
      await this.connectToDatabase();
      console.log('Server has started successfully');
      // Burada, veritabanı bağlantısı başarılı olduktan sonra sunucu başlatabilirsiniz
    } catch (error) {
      console.error('Failed to start the server', error);
      process.exit(1); // Sunucu başlatılamazsa uygulamayı kapat
    }
  }
}

// Sınıfı başlat ve sunucuyu başlat
const dbConnection = new ConnectToDatabase();
dbConnection.startServer();
