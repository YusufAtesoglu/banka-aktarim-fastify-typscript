"use strict";
const currentAccounts = require('../controllers/currentAccounts.controller');
/* GET currentAccounts */
fastify.get('/GetErpCurrentAccounts', currentAccounts.getErpCurrentAccounts);
/* POST currentAccount */
fastify.post('/CreateOrUpdate', currentAccounts.createOrUpdateCurrentAccount);
module.exports = fastify;
