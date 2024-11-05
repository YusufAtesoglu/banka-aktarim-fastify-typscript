import { FastifyInstance,FastifyPluginCallback } from 'fastify';
import    BankAccountsService   from '../service/bankAccountService';

export const bankAccountsRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {

const bankAccountsService =new BankAccountsService();

/* GET bankAccounts */
fastify.get('/GetErpBankAccounts', bankAccountsService.getErpBankAccounts);

fastify.get('/GetWithBalance', bankAccountsService.getWithBalance);


/* GET bankAccount */
fastify.get('/:id', bankAccountsService.get);


/* POST bankAccount */
fastify.post('/CreateOrUpdateWithIban', bankAccountsService.createOrUpdateWithIban);

/* DELETE bankAccount */
fastify.delete('/:id', bankAccountsService.remove);

}