import { FastifyInstance,FastifyPluginCallback } from 'fastify';
import FinrotaServices from '../service/finrota.Services';

export const finrotaRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {

const finrotaService=new FinrotaServices();

/* GET transactions. */
fastify.get('/', finrotaService.get);
  
/* POST transaction */
fastify.post('/', finrotaService.create);

/* PUT transaction */
fastify.put('/:id', finrotaService.update);

/* DELETE transaction */
fastify.delete('/:id', finrotaService.remove);
}
