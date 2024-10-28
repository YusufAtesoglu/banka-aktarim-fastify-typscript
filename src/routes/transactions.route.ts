import {fastify} from "@fastify/routes"

const transactions = require('../controllers/transactions.controller');

/* GET transactions. */
fastify.get('/', transactions.get);
  
/* POST transaction */
fastify.post('/', transactions.create);

/* PUT transaction */
fastify.put('/setBankAccountTransactionErpCode', transactions.setBankAccountTransactionErpCode);
fastify.put('/:id', transactions.update);


/* DELETE transaction */
fastify.delete('/:id', transactions.remove);

module.exports = {};
