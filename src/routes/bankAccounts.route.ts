import fastify, { FastifyInstance,FastifyPluginCallback } from 'fastify';
const server: FastifyInstance = fastify({ logger: true });
const bankAccounts = require('../controllers/bankAccounts.controller');

export const bankAccountsRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {
/* GET bankAccounts */
server.get('/GetErpBankAccounts', bankAccounts.getErpBankAccounts);
server.get('/GetWithBalance', bankAccounts.getWithBalance);


/* GET bankAccount */
server.get('/:id', bankAccounts.get);


/* POST bankAccount */
server.post('/CreateOrUpdateWithIban', bankAccounts.createOrUpdateWithIban);

/* DELETE bankAccount */
server.delete('/:id', bankAccounts.remove);

}