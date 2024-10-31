const { sendRequestToThirdParty } = require('../utils/helpers.util');
import { FastifyRequest, FastifyReply } from 'fastify';

export class AccountPlanCodes{
async  get(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const accountPlanCodes = await sendRequestToThirdParty(token, 'GET', 'AccountPlanCodes', true, req.query);
        res.send(accountPlanCodes);
    } catch (err:any) {
        console.error(`Error while getting account plan codes`, err.message);
  
    }
}

async  create(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const accountPlanCodes = await sendRequestToThirdParty(token, 'POST', 'AccountPlanCodes', true, req.body);
        res.send(accountPlanCodes);
    } catch (err:any) {
        console.error(`Error while creating`, err.message);
      
    }
}

async  update(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const accountPlanCodes = await sendRequestToThirdParty(token, 'PUT', 'AccountPlanCodes', true, req.body);
        res.send(accountPlanCodes);
    } catch (err:any) {
        console.error(`Error while updating`, err.message);
       
    }
}

async  remove(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const { id }:any = req.params;
        const accountPlanCodes = await sendRequestToThirdParty(token, 'DELETE', `AccountPlanCodes/${id}`, true);
        res.send(accountPlanCodes);
    } catch (err:any) {
        console.error(`Error while removing`, err.message);
       
    }
}
}
// module.exports = {
//   get,
//   create,
//   update,
//   remove
// };
