import { FastifyInstance,FastifyPluginCallback } from 'fastify';
import  TransactionsService  from '../service/transactionService';

export const transactionsRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {

const transactionsService=new TransactionsService();

/* GET transactions. */
fastify.get('/', transactionsService.get);
  
/* POST transaction */
fastify.post('/', transactionsService.create);

/* PUT transaction */
fastify.put('/setBankAccountTransactionErpCode', transactionsService.setBankAccountTransactionErpCode);
fastify.put('/:id', transactionsService.update);


/* DELETE transaction */
fastify.delete('/:id', transactionsService.remove);
}

