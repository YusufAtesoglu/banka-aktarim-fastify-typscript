"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import cors from "@fastify/cors"
const transactions_route_1 = require("./src/routes/transactions.route");
const accountPlanCodes_route_1 = require("./src/routes/accountPlanCodes.route");
const currentAccounts_route_1 = require("./src/routes/currentAccounts.route");
const bankAccounts_route_1 = require("./src/routes/bankAccounts.route");
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)();
const port = Number(process.env.PORT) || 3700;
// app.register(cors);
app.get('/', async (req, res) => {
    res.send({ message: 'ok' });
});
app.register(transactions_route_1.transactionsRouter, { prefix: '/transactions' });
app.register(accountPlanCodes_route_1.accountPlanCodesRouter, { prefix: '/accountPlanCodes' });
app.register(currentAccounts_route_1.currentAccountsRouter, { prefix: '/currentAccounts' });
app.register(bankAccounts_route_1.bankAccountsRouter, { prefix: '/bankAccounts' });
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
