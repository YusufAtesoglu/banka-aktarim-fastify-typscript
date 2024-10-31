import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
// import cors from "@fastify/cors"
import {transactionsRouter}from "./src/routes/transactions.route"
import {accountPlanCodesRouter}from "./src/routes/accountPlanCodes.route"
import {currentAccountsRouter}from "./src/routes/currentAccounts.route"
import {bankAccountsRouter}from "./src/routes/bankAccounts.route"
import fastify from 'fastify';

const app=fastify();
const port = Number(process.env.PORT) || 3700;


// app.register(cors);


app.get('/', async (req: FastifyRequest, res: FastifyReply) => {
  res.send({ message: 'ok' });
});


app.register(transactionsRouter, { prefix: '/transactions' });
app.register(accountPlanCodesRouter, { prefix: '/accountPlanCodes' });
app.register(currentAccountsRouter, { prefix: '/currentAccounts' });
app.register(bankAccountsRouter, { prefix: '/bankAccounts' });
// app.register(accountPlanCodesRouter)
// app.register(bankAccountsRouter)
// app.register(currentAccountsRouter)
// app.register(transactionsRouter)


app.setErrorHandler((error, req, res) => {
  const statusCode = error.statusCode || 500;
  console.error(error.message, error.stack);
  res.status(statusCode).send({ message: error.message });
});


app.listen({ port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
