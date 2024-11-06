import  { FastifyInstance } from 'fastify';
import fastify from 'fastify';
import { transactionsRouter } from './src/routes/transactions.route';
import { accountPlanCodesRouter } from './src/routes/accountPlanCodes.route';
import { currentAccountsRouter } from './src/routes/currentAccounts.route';
import { bankAccountsRouter } from './src/routes/bankAccounts.route';
import ConnectToDatabase from './src/entities/dataSource';


const app: FastifyInstance = fastify();
const port = Number(process.env.PORT) || 3700;
const dbConnection = new ConnectToDatabase();


app.register(transactionsRouter, { prefix: '/transactions' });
app.register(accountPlanCodesRouter, { prefix: '/accountPlanCodes' });
app.register(currentAccountsRouter, { prefix: '/currentAccounts' });
app.register(bankAccountsRouter, { prefix: '/bankAccounts' });


app.setErrorHandler((error, req, res) => {
  const statusCode = error.statusCode || 500;
  console.error(error.message, error.stack);
  res.status(statusCode).send({ message: error.message });
});


const startServer = async () => {
  try {
   
    await dbConnection.connectToDatabase();
    app.listen({ port, host: '0.0.0.0' }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1); 
  }
};

// Sunucuyu başlat
startServer();
