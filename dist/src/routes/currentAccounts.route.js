"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentAccountsRouter = void 0;
const currentAccounts_controller_1 = require("../controllers/currentAccounts.controller");
const currentAccountsRouter = async (fastify) => {
    const currentAccounts = new currentAccounts_controller_1.CurrentAccounts();
    /* GET currentAccounts */
    fastify.get('/GetErpCurrentAccounts', currentAccounts.getErpCurrentAccounts);
    /* POST currentAccount */
    fastify.post('/CreateOrUpdate', currentAccounts.createOrUpdateCurrentAccount);
};
exports.currentAccountsRouter = currentAccountsRouter;
