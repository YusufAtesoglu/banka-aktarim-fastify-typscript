"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankAccountsRouter = void 0;
const bankAccounts_controller_1 = require("../controllers/bankAccounts.controller");
const bankAccountsRouter = async (fastify) => {
    const bankAccounts = new bankAccounts_controller_1.BankAccounts();
    /* GET bankAccounts */
    fastify.get('/GetErpBankAccounts', bankAccounts.getErpBankAccounts);
    fastify.get('/GetWithBalance', bankAccounts.getWithBalance);
    /* GET bankAccount */
    fastify.get('/:id', bankAccounts.get);
    /* POST bankAccount */
    fastify.post('/CreateOrUpdateWithIban', bankAccounts.createOrUpdateWithIban);
    /* DELETE bankAccount */
    fastify.delete('/:id', bankAccounts.remove);
};
exports.bankAccountsRouter = bankAccountsRouter;
