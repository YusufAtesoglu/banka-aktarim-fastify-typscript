"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentAccountsRouter = void 0;
const fastify_1 = __importDefault(require("fastify"));
const currentAccounts = require("../controllers/currentAccounts.controller");
const server = (0, fastify_1.default)({ logger: true });
const currentAccountsRouter = async (fastify) => {
    /* GET currentAccounts */
    server.get('/GetErpCurrentAccounts', currentAccounts.getErpCurrentAccounts);
    /* POST currentAccount */
    server.post('/CreateOrUpdate', currentAccounts.createOrUpdateCurrentAccount);
};
exports.currentAccountsRouter = currentAccountsRouter;
