"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankAccountsRouter = void 0;
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)({ logger: true });
const bankAccounts = require('../controllers/bankAccounts.controller');
const bankAccountsRouter = async (fastify) => {
    /* GET bankAccounts */
    server.get('/GetErpBankAccounts', bankAccounts.getErpBankAccounts);
    server.get('/GetWithBalance', bankAccounts.getWithBalance);
    /* GET bankAccount */
    server.get('/:id', bankAccounts.get);
    /* POST bankAccount */
    server.post('/CreateOrUpdateWithIban', bankAccounts.createOrUpdateWithIban);
    /* DELETE bankAccount */
    server.delete('/:id', bankAccounts.remove);
};
exports.bankAccountsRouter = bankAccountsRouter;
