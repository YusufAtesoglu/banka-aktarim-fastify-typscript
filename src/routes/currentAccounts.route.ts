import  { FastifyInstance,FastifyPluginCallback } from 'fastify';
import CurrentAccountsService from '../service/currentAccountService';

export const currentAccountsRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {
const currentAccountsService =new CurrentAccountsService();
/* GET currentAccounts */
fastify.get('/', currentAccountsService.getErpCurrentAccounts);

/* POST currentAccount */
fastify.post('/', currentAccountsService.createOrUpdateCurrentAccount);


}