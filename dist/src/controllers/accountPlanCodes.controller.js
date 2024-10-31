"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountPlanCodes = void 0;
const { sendRequestToThirdParty } = require('../utils/helpers.util');
class AccountPlanCodes {
    async get(req, res) {
        try {
            const token = req.headers.authorization;
            const accountPlanCodes = await sendRequestToThirdParty(token, 'GET', 'AccountPlanCodes', true, req.query);
            res.send(accountPlanCodes);
        }
        catch (err) {
            console.error(`Error while getting account plan codes`, err.message);
        }
    }
    async create(req, res) {
        try {
            const token = req.headers.authorization;
            const accountPlanCodes = await sendRequestToThirdParty(token, 'POST', 'AccountPlanCodes', true, req.body);
            res.send(accountPlanCodes);
        }
        catch (err) {
            console.error(`Error while creating`, err.message);
        }
    }
    async update(req, res) {
        try {
            const token = req.headers.authorization;
            const accountPlanCodes = await sendRequestToThirdParty(token, 'PUT', 'AccountPlanCodes', true, req.body);
            res.send(accountPlanCodes);
        }
        catch (err) {
            console.error(`Error while updating`, err.message);
        }
    }
    async remove(req, res) {
        try {
            const token = req.headers.authorization;
            const { id } = req.params;
            const accountPlanCodes = await sendRequestToThirdParty(token, 'DELETE', `AccountPlanCodes/${id}`, true);
            res.send(accountPlanCodes);
        }
        catch (err) {
            console.error(`Error while removing`, err.message);
        }
    }
}
exports.AccountPlanCodes = AccountPlanCodes;
// module.exports = {
//   get,
//   create,
//   update,
//   remove
// };
