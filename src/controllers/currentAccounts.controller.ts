const { sendRequestToThirdParty } = require('../utils/helpers.util');
import { FastifyRequest, FastifyReply } from 'fastify';
async function getErpCurrentAccounts(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const erpCurrentAccounts = await sendRequestToThirdParty(token, 'GET', 'CurrentAccounts/GetErpCurrentAccounts', false, req.query);
        res.send(erpCurrentAccounts);
    } catch (err:any) {
        console.error(`Error while getErpCurrentAccounts`, err.message);
      
    }
}

async function createOrUpdateCurrentAccount(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const currentAccount = await sendRequestToThirdParty(token, 'POST', 'CurrentAccounts/CreateOrUpdate', false, req.body);
        res.send(currentAccount);
    } catch (err:any) {
        console.error(`Error while creating`, err.message);
     
    }
}

module.exports = {
  getErpCurrentAccounts,
  createOrUpdateCurrentAccount,
};
