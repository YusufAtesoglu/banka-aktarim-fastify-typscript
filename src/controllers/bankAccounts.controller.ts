const { sendRequestToThirdParty } = require('../utils/helpers.util');
import { FastifyRequest, FastifyReply } from 'fastify';

export class BankAccounts{ 
async  getErpBankAccounts(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const erpBankAccounts = await sendRequestToThirdParty(token, 'GET', 'BankAccounts/GetErpBankAccounts', false);
        res.send(erpBankAccounts);
    } catch (err:any) {
        console.error(`Error while getErpBankAccounts`, err.message);
       
    }
}

async  get(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const { id }:any = req.params;
        const erpBankAccount = await sendRequestToThirdParty(token, 'GET', `BankAccounts/${id}`, false);
        res.send(erpBankAccount);
    } catch (err:any) {
        console.error(`Error while get`, err.message);
       
    }
}

async  createOrUpdateWithIban(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const erpBankAccount = await sendRequestToThirdParty(token, 'POST', 'BankAccounts/CreateOrUpdateWithIban', false, req.body);
        res.send(erpBankAccount);
    } catch (err:any) {
        console.error(`Error while createOrUpdateWithIban`, err.message);
      
    }
}

async  getWithBalance(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const erpBankAccount = await sendRequestToThirdParty(token, 'GET', 'BankAccounts/GetWithBalance', true);
        res.send(erpBankAccount);
    } catch (err:any) {
        console.error(`Error while getting account plan codes`, err.message);
      
    }
}

async  remove(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const { id }:any = req.params;
        const erpBankAccount = await sendRequestToThirdParty(token, 'DELETE', `BankAccounts/${id}`, false);
        res.send(erpBankAccount);
    } catch (err:any) {
        console.error(`Error while get`, err.message);
       
    }
}
}
// module.exports = {
//   get,
//   getErpBankAccounts,
//   createOrUpdateWithIban,
//   getWithBalance,
//   remove
// };
