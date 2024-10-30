"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountPlanCodesRouter = void 0;
const accountPlanCodes = require('../controllers/accountPlanCodes.controller');
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)({ logger: true });
const accountPlanCodesRouter = async (fastify) => {
    /* GET accountPlanCodes. */
    server.get('/', accountPlanCodes.get);
    /* POST accountPlanCode */
    server.post('/', accountPlanCodes.create);
    /* PUT accountPlanCode */
    server.put('/:id', accountPlanCodes.update);
    /* DELETE transaction */
    server.delete('/:id', accountPlanCodes.remove);
};
exports.accountPlanCodesRouter = accountPlanCodesRouter;
