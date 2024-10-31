import { FastifyInstance,FastifyPluginCallback } from 'fastify';
import { Transactions } from '../controllers/transactions.controller';

export const transactionsRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {

const transactions=new Transactions();

/* GET transactions. */
fastify.get('/', transactions.get);
  
/* POST transaction */
fastify.post('/', transactions.create);

/* PUT transaction */
fastify.put('/setBankAccountTransactionErpCode', transactions.setBankAccountTransactionErpCode);
fastify.put('/:id', transactions.update);


/* DELETE transaction */
fastify.delete('/:id', transactions.remove);
}

