"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccounts = void 0;
const { sendRequestToThirdParty } = require('../utils/helpers.util');
class BankAccounts {
    async getErpBankAccounts(req, res) {
        try {
            const token = req.headers.authorization;
            const erpBankAccounts = await sendRequestToThirdParty(token, 'GET', 'BankAccounts/GetErpBankAccounts', false);
            res.send(erpBankAccounts);
        }
        catch (err) {
            console.error(`Error while getErpBankAccounts`, err.message);
        }
    }
    async get(req, res) {
        try {
            const token = req.headers.authorization;
            const { id } = req.params;
            const erpBankAccount = await sendRequestToThirdParty(token, 'GET', `BankAccounts/${id}`, false);
            res.send(erpBankAccount);
        }
        catch (err) {
            console.error(`Error while get`, err.message);
        }
    }
    async createOrUpdateWithIban(req, res) {
        try {
            const token = req.headers.authorization;
            const erpBankAccount = await sendRequestToThirdParty(token, 'POST', 'BankAccounts/CreateOrUpdateWithIban', false, req.body);
            res.send(erpBankAccount);
        }
        catch (err) {
            console.error(`Error while createOrUpdateWithIban`, err.message);
        }
    }
    async getWithBalance(req, res) {
        try {
            const token = req.headers.authorization;
            const erpBankAccount = await sendRequestToThirdParty(token, 'GET', 'BankAccounts/GetWithBalance', true);
            res.send(erpBankAccount);
        }
        catch (err) {
            console.error(`Error while getting account plan codes`, err.message);
        }
    }
    async remove(req, res) {
        try {
            const token = req.headers.authorization;
            const { id } = req.params;
            const erpBankAccount = await sendRequestToThirdParty(token, 'DELETE', `BankAccounts/${id}`, false);
            res.send(erpBankAccount);
        }
        catch (err) {
            console.error(`Error while get`, err.message);
        }
    }
}
exports.BankAccounts = BankAccounts;
// module.exports = {
//   get,
//   getErpBankAccounts,
//   createOrUpdateWithIban,
//   getWithBalance,
//   remove
// };
