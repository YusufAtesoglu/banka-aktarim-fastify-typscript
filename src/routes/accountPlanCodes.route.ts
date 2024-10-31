import {AccountPlanCodes} from '../controllers/accountPlanCodes.controller';
import  { FastifyInstance,FastifyPluginCallback } from 'fastify';


export const accountPlanCodesRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {
const accountPlanCodes=new AccountPlanCodes();

/* GET accountPlanCodes. */
fastify.get('/', accountPlanCodes.get);
  
/* POST accountPlanCode */
fastify.post('/', accountPlanCodes.create);

/* PUT accountPlanCode */
fastify.put('/:id', accountPlanCodes.update);

/* DELETE transaction */
fastify.delete('/:id', accountPlanCodes.remove);


}