"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccounts = void 0;
const { sendRequestToThirdParty } = require('../utils/helpers.util');
class CurrentAccounts {
    async getErpCurrentAccounts(req, res) {
        try { //console.log("ok");
            const token = req.headers.authorization;
            const erpCurrentAccounts = await sendRequestToThirdParty(token, 'GET', 'CurrentAccounts/GetErpCurrentAccounts', false, req.query);
            res.send(erpCurrentAccounts);
        }
        catch (err) {
            console.error(`Error while getErpCurrentAccounts`, err.message);
        }
    }
    async createOrUpdateCurrentAccount(req, res) {
        try {
            console.log("createorupdate");
            const token = req.headers.authorization;
            const currentAccount = await sendRequestToThirdParty(token, 'POST', 'CurrentAccounts/CreateOrUpdate', false, req.body);
            res.send(currentAccount);
        }
        catch (err) {
            console.error(`Error while creating`, err.message);
        }
    }
}
exports.CurrentAccounts = CurrentAccounts;
// module.exports = {
//   getErpCurrentAccounts,
//   createOrUpdateCurrentAccount,
// };
