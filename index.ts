import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
const cors=require("fastify-cors")
const {transactionsRouter}=require("./src/routes/transactions.route")
const {accountPlanCodesRouter}=require("./src/routes/accountPlanCodes.route")
const {currentAccountsRouter}=require("./routes/currentAccounts.route")
const {bankAccountsRouter}=require("./routes/bankAccounts.route")
const app: FastifyInstance = Fastify();
const port = Number(process.env.PORT) || 3700;


app.register(cors);


app.get('/', async (req: FastifyRequest, res: FastifyReply) => {
  res.send({ message: 'ok' });
});


app.register(transactionsRouter, { prefix: '/transactions' });
app.register(accountPlanCodesRouter, { prefix: '/accountPlanCodes' });
app.register(currentAccountsRouter, { prefix: '/currentAccounts' });
app.register(bankAccountsRouter, { prefix: '/bankAccounts' });


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
