const { sendRequestToThirdParty } = require('../utils/helpers.util');
import { FastifyRequest, FastifyReply } from 'fastify';
export class CurrentAccounts{
async  getErpCurrentAccounts(req:FastifyRequest, res:FastifyReply) {
    try { //console.log("ok");
    
        const token = req.headers.authorization;
        const erpCurrentAccounts = await sendRequestToThirdParty(token, 'GET', 'CurrentAccounts/GetErpCurrentAccounts', false, req.query);
        res.send(erpCurrentAccounts);
    } catch (err:any) {
        console.error(`Error while getErpCurrentAccounts`, err.message);
      
    }
}

async  createOrUpdateCurrentAccount(req:FastifyRequest, res:FastifyReply) {
    try { console.log("createorupdate");
    
        const token = req.headers.authorization;
        const currentAccount = await sendRequestToThirdParty(token, 'POST', 'CurrentAccounts/CreateOrUpdate', false, req.body);
        res.send(currentAccount);
    } catch (err:any) {
        console.error(`Error while creating`, err.message);
     
    }
}

}

// module.exports = {
//   getErpCurrentAccounts,
//   createOrUpdateCurrentAccount,
// };
