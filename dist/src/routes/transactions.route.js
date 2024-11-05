"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsRouter = void 0;
const transactionService_1 = __importDefault(require("../service/transactionService"));
const transactionsRouter = async (fastify) => {
    const transactionsService = new transactionService_1.default();
    /* GET transactions. */
    fastify.get('/', transactionsService.get);
    /* POST transaction */
    fastify.post('/', transactionsService.create);
    /* PUT transaction */
    fastify.put('/setBankAccountTransactionErpCode', transactionsService.setBankAccountTransactionErpCode);
    fastify.put('/:id', transactionsService.update);
    /* DELETE transaction */
    fastify.delete('/:id', transactionsService.remove);
};
exports.transactionsRouter = transactionsRouter;
