import fastify, { FastifyInstance } from 'fastify';
import {currentAccounts}  from "../controllers/currentAccounts.controller";
const server: FastifyInstance = fastify({ logger: true });
/* GET currentAccounts */
server.get('/GetErpCurrentAccounts', currentAccounts.getErpCurrentAccounts);

/* POST currentAccount */
server.post('/CreateOrUpdate', currentAccounts.createOrUpdateCurrentAccount);

module.exports = fastify;
