"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankAccountsRouter = void 0;
const bankAccountService_1 = __importDefault(require("../service/bankAccountService"));
const bankAccountsRouter = async (fastify) => {
    const bankAccountsService = new bankAccountService_1.default();
    /* GET bankAccounts */
    fastify.get('/GetErpBankAccounts', bankAccountsService.getErpBankAccounts);
    fastify.get('/GetWithBalance', bankAccountsService.getWithBalance);
    /* GET bankAccount */
    fastify.get('/:id', bankAccountsService.get);
    /* POST bankAccount */
    fastify.post('/CreateOrUpdateWithIban', bankAccountsService.createOrUpdateWithIban);
    /* DELETE bankAccount */
    fastify.delete('/:id', bankAccountsService.remove);
};
exports.bankAccountsRouter = bankAccountsRouter;
