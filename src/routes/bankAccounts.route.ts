
const bankAccounts = require('../controllers/bankAccounts.controller');

/* GET bankAccounts */
fastify.get('/GetErpBankAccounts', bankAccounts.getErpBankAccounts);
fastify.get('/GetWithBalance', bankAccounts.getWithBalance);


/* GET bankAccount */
fastify.get('/:id', bankAccounts.get);


/* POST bankAccount */
fastify.post('/CreateOrUpdateWithIban', bankAccounts.createOrUpdateWithIban);

/* DELETE bankAccount */
fastify.delete('/:id', bankAccounts.remove);

module.exports = fastify;
