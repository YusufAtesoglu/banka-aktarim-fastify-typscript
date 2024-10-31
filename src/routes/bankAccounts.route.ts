import { FastifyInstance,FastifyPluginCallback } from 'fastify';
import { BankAccounts } from '../controllers/bankAccounts.controller';

export const bankAccountsRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {

const bankAccounts =new BankAccounts();

/* GET bankAccounts */
fastify.get('/GetErpBankAccounts', bankAccounts.getErpBankAccounts);

fastify.get('/GetWithBalance', bankAccounts.getWithBalance);


/* GET bankAccount */
fastify.get('/:id', bankAccounts.get);


/* POST bankAccount */
fastify.post('/CreateOrUpdateWithIban', bankAccounts.createOrUpdateWithIban);

/* DELETE bankAccount */
fastify.delete('/:id', bankAccounts.remove);

}