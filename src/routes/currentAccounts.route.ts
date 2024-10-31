import  { FastifyInstance,FastifyPluginCallback } from 'fastify';
import { CurrentAccounts } from '../controllers/currentAccounts.controller';

export const currentAccountsRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {
const currentAccounts =new CurrentAccounts();
/* GET currentAccounts */
fastify.get('/GetErpCurrentAccounts', currentAccounts.getErpCurrentAccounts);

/* POST currentAccount */
fastify.post('/CreateOrUpdate', currentAccounts.createOrUpdateCurrentAccount);


}