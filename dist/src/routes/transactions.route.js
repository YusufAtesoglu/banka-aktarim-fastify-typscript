"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsRouter = void 0;
const transactions_controller_1 = require("../controllers/transactions.controller");
const transactionsRouter = async (fastify) => {
    const transactions = new transactions_controller_1.Transactions();
    /* GET transactions. */
    fastify.get('/', transactions.get);
    /* POST transaction */
    fastify.post('/', transactions.create);
    /* PUT transaction */
    fastify.put('/setBankAccountTransactionErpCode', transactions.setBankAccountTransactionErpCode);
    fastify.put('/:id', transactions.update);
    /* DELETE transaction */
    fastify.delete('/:id', transactions.remove);
};
exports.transactionsRouter = transactionsRouter;
