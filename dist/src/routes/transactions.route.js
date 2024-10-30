"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsRouter = void 0;
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)({ logger: true });
const transactions = require('../controllers/transactions.controller');
const transactionsRouter = async (fastify) => {
    /* GET transactions. */
    server.get('/', transactions.get);
    /* POST transaction */
    server.post('/', transactions.create);
    /* PUT transaction */
    server.put('/setBankAccountTransactionErpCode', transactions.setBankAccountTransactionErpCode);
    server.put('/:id', transactions.update);
    /* DELETE transaction */
    server.delete('/:id', transactions.remove);
};
exports.transactionsRouter = transactionsRouter;
