const { sendRequestToThirdParty } = require('../utils/helpers.util');
import { FastifyRequest, FastifyReply } from 'fastify';
async function get(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const accountPlanCodes = await sendRequestToThirdParty(token, 'GET', 'AccountPlanCodes', true, req.query);
        res.send(accountPlanCodes);
    } catch (err:any) {
        console.error(`Error while getting account plan codes`, err.message);
  
    }
}

async function create(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const accountPlanCodes = await sendRequestToThirdParty(token, 'POST', 'AccountPlanCodes', true, req.body);
        res.send(accountPlanCodes);
    } catch (err:any) {
        console.error(`Error while creating`, err.message);
      
    }
}

async function update(req:FastifyRequest, res:FastifyReply,next:any) {
    try {
        const token = req.headers.authorization;
        const accountPlanCodes = await sendRequestToThirdParty(token, 'PUT', 'AccountPlanCodes', true, req.body);
        res.send(accountPlanCodes);
    } catch (err:any) {
        console.error(`Error while updating`, err.message);
        next(err);
    }
}

async function remove(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const { id }:any = req.params;
        const accountPlanCodes = await sendRequestToThirdParty(token, 'DELETE', `AccountPlanCodes/${id}`, true);
        res.send(accountPlanCodes);
    } catch (err:any) {
        console.error(`Error while removing`, err.message);
       
    }
}

module.exports = {
  get,
  create,
  update,
  remove
};
