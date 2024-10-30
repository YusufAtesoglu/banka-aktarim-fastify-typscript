const accountPlanCodes = require('../controllers/accountPlanCodes.controller');
import fastify, { FastifyInstance,FastifyPluginCallback } from 'fastify';
const server: FastifyInstance = fastify({ logger: true });

export const accountPlanCodesRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {

/* GET accountPlanCodes. */
server.get('/', accountPlanCodes.get);
  
/* POST accountPlanCode */
server.post('/', accountPlanCodes.create);

/* PUT accountPlanCode */
server.put('/:id', accountPlanCodes.update);

/* DELETE transaction */
server.delete('/:id', accountPlanCodes.remove);


}