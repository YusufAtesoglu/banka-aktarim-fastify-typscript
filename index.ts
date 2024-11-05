// import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
// // import cors from "@fastify/cors"
// import {transactionsRouter}from "./src/routes/transactions.route"
// import {accountPlanCodesRouter}from "./src/routes/accountPlanCodes.route"
// import {currentAccountsRouter}from "./src/routes/currentAccounts.route"
// import {bankAccountsRouter}from "./src/routes/bankAccounts.route"
// import fastify from 'fastify';
// import ConnectToDatabase from './src/entities/dataSource';

// const app=fastify();
// const port = Number(process.env.PORT) || 3700;
// const dbConnection = new ConnectToDatabase();

// // app.register(cors);
// app.register(transactionsRouter, { prefix: '/transactions' });
// app.register(accountPlanCodesRouter, { prefix: '/accountPlanCodes' });
// app.register(currentAccountsRouter, { prefix: '/currentAccounts' });
// app.register(bankAccountsRouter, { prefix: '/bankAccounts' });
// // app.register(accountPlanCodesRouter)
// // app.register(bankAccountsRouter)
// // app.register(currentAccountsRouter)
// // app.register(transactionsRouter)


// app.setErrorHandler((error, req, res) => {
//   const statusCode = error.statusCode || 500;
//   console.error(error.message, error.stack);
//   res.status(statusCode).send({ message: error.message });
// });


// app.listen({ port, host: '0.0.0.0' }, (err, address) => {
//   if (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   console.log(`Server listening at ${address}`);
// });
import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fastify from 'fastify';
import { transactionsRouter } from './src/routes/transactions.route';
import { accountPlanCodesRouter } from './src/routes/accountPlanCodes.route';
import { currentAccountsRouter } from './src/routes/currentAccounts.route';
import { bankAccountsRouter } from './src/routes/bankAccounts.route';
import ConnectToDatabase from './src/entities/dataSource';

// Fastify uygulamasını başlat
const app: FastifyInstance = fastify();
const port = Number(process.env.PORT) || 3700;
const dbConnection = new ConnectToDatabase();

// Yönlendiricileri kaydet
app.register(transactionsRouter, { prefix: '/transactions' });
app.register(accountPlanCodesRouter, { prefix: '/accountPlanCodes' });
app.register(currentAccountsRouter, { prefix: '/currentAccounts' });
app.register(bankAccountsRouter, { prefix: '/bankAccounts' });

// Hata işleyicisini ayarla
app.setErrorHandler((error, req, res) => {
  const statusCode = error.statusCode || 500;
  console.error(error.message, error.stack);
  res.status(statusCode).send({ message: error.message });
});

// Sunucu başlatma fonksiyonu
const startServer = async () => {
  try {
    // Veritabanı bağlantısını başlat
    await dbConnection.connectToDatabase();

    // Sunucuyu başlat
    app.listen({ port, host: '0.0.0.0' }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1); // Başlatılamazsa uygulamayı kapat
  }
};

// Sunucuyu başlat
startServer();
