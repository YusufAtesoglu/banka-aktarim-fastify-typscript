import { FastifyRequest, FastifyReply } from 'fastify';
const { sendRequestToThirdParty } = require('../utils/helpers.util');

export default class FinrotaServices { 
async  get(req:FastifyRequest, res:FastifyReply) {
    try {
        const token = req.headers.authorization;
        const finrota = await sendRequestToThirdParty(token, 'GET', 'FinrotaTransaction/GetTransactions', true, req.query);
        res.send(finrota);
    } catch (err:any) {
        console.error(`Error while getting bank account transactions`, err.message);
  
    }
}


async  create(req:FastifyRequest, res:FastifyReply) {
  try {
  } catch (err:any) {
    console.error(`Error while creating`, err.message);
   
  }
}

async  update(req:FastifyRequest, res:FastifyReply) {
  try {
  } catch (err:any) {
    console.error(`Error while updating`, err.message);
   
  }
}

async  remove(req:FastifyRequest, res:FastifyReply) {
  try {
  } catch (err:any) {
    console.error(`Error while deleting`, err.message);
   
  }
}
}

