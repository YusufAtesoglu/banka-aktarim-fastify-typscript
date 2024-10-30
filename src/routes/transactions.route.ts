import fastify, { FastifyInstance,FastifyPluginCallback } from 'fastify';
const server: FastifyInstance = fastify({ logger: true });
const transactions = require('../controllers/transactions.controller');

export const transactionsRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {
/* GET transactions. */
server.get('/', transactions.get);
  
/* POST transaction */
server.post('/', transactions.create);

/* PUT transaction */
server.put('/setBankAccountTransactionErpCode', transactions.setBankAccountTransactionErpCode);
server.put('/:id', transactions.update);


/* DELETE transaction */
server.delete('/:id', transactions.remove);
}

