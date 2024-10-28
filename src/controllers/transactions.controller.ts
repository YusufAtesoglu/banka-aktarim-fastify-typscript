import { FastifyRequest, FastifyReply } from 'fastify';
const { sendRequestToThirdParty } = require('../utils/helpers.util');


async function get(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const bankAccountTransactions = await sendRequestToThirdParty(token, 'GET', 'BankAccountTransactions/GetTransactions', true, req.query);
        res.send(bankAccountTransactions);
    } catch (err:any) {
        console.error(`Error while getting bank account transactions`, err.message);
  
    }
}

async function setBankAccountTransactionErpCode(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const bankAccountTransaction = await sendRequestToThirdParty(token, 'PUT', 'BankAccountTransactions/SetBankAccountTransactionErpCode', true, req.body);
        res.send(bankAccountTransaction);
    } catch (err:any) {
        console.error(`Error while setBankAccountTransactionErpCode`, err.message);
      
    }
}

async function create(req:FastifyRequest, res:FastifyReply) {
  try {
  } catch (err:any) {
    console.error(`Error while creating`, err.message);
   
  }
}

async function update(req:FastifyRequest, res:FastifyReply) {
  try {
  } catch (err:any) {
    console.error(`Error while updating`, err.message);
   
  }
}

async function remove(req:FastifyRequest, res:FastifyReply) {
  try {
  } catch (err:any) {
    console.error(`Error while deleting`, err.message);
   
  }
}

module.exports = {
  get,
  setBankAccountTransactionErpCode,
  create,
  update,
  remove
};
