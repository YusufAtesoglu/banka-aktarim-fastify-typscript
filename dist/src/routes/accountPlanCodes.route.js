"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountPlanCodesRouter = void 0;
const accountPlanCodes_controller_1 = require("../controllers/accountPlanCodes.controller");
const accountPlanCodesRouter = async (fastify) => {
    const accountPlanCodes = new accountPlanCodes_controller_1.AccountPlanCodes();
    /* GET accountPlanCodes. */
    fastify.get('/', accountPlanCodes.get);
    /* POST accountPlanCode */
    fastify.post('/', accountPlanCodes.create);
    /* PUT accountPlanCode */
    fastify.put('/:id', accountPlanCodes.update);
    /* DELETE transaction */
    fastify.delete('/:id', accountPlanCodes.remove);
};
exports.accountPlanCodesRouter = accountPlanCodesRouter;
