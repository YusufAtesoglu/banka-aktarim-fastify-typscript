"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountPlanCodesRouter = void 0;
const accountPlanService_1 = __importDefault(require("../service/accountPlanService"));
const accountPlanCodesRouter = async (fastify) => {
    const accountPlanService = new accountPlanService_1.default();
    /* GET accountPlanCodes. */
    fastify.get('/', accountPlanService.get);
    /* POST accountPlanCode */
    fastify.post('/', accountPlanService.create);
    /* PUT accountPlanCode */
    fastify.put('/:id', accountPlanService.update);
    /* DELETE transaction */
    fastify.delete('/:id', accountPlanService.remove);
};
exports.accountPlanCodesRouter = accountPlanCodesRouter;
