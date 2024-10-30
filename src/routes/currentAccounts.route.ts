import fastify, { FastifyInstance,FastifyPluginCallback } from 'fastify';
const currentAccounts=require("../controllers/currentAccounts.controller")
const server: FastifyInstance = fastify({ logger: true });

export const currentAccountsRouter: FastifyPluginCallback = async (fastify: FastifyInstance) => {
/* GET currentAccounts */
server.get('/GetErpCurrentAccounts', currentAccounts.getErpCurrentAccounts);

/* POST currentAccount */
server.post('/CreateOrUpdate', currentAccounts.createOrUpdateCurrentAccount);


}