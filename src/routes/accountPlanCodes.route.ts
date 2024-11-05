import AccountPlanService from '../service/accountPlanService';
import  { FastifyInstance,FastifyPluginCallback } from 'fastify';


export const accountPlanCodesRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {
const accountPlanService=new AccountPlanService();

/* GET accountPlanCodes. */
fastify.get('/', accountPlanService.get);
  
/* POST accountPlanCode */
fastify.post('/', accountPlanService.create);

/* PUT accountPlanCode */
fastify.put('/:id', accountPlanService.update);

/* DELETE transaction */
fastify.delete('/:id', accountPlanService.remove);


}