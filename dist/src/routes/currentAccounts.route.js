"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentAccountsRouter = void 0;
const currentAccountService_1 = __importDefault(require("../service/currentAccountService"));
const currentAccountsRouter = async (fastify) => {
    const currentAccountsService = new currentAccountService_1.default();
    /* GET currentAccounts */
    fastify.get('/', currentAccountsService.getErpCurrentAccounts);
    /* POST currentAccount */
    fastify.post('/', currentAccountsService.createOrUpdateCurrentAccount);
};
exports.currentAccountsRouter = currentAccountsRouter;
