"use strict";
const accountPlanCodes = require('../controllers/accountPlanCodes.controller');
const fastifyy = require("fastify")();
/* GET accountPlanCodes. */
fastifyy.get('/', accountPlanCodes.get);
/* POST accountPlanCode */
fastifyy.post('/', accountPlanCodes.create);
/* PUT accountPlanCode */
fastifyy.put('/:id', accountPlanCodes.update);
/* DELETE transaction */
fastifyy.delete('/:id', accountPlanCodes.remove);
module.exports = fastifyy;
