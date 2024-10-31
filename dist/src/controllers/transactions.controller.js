"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const { sendRequestToThirdParty } = require('../utils/helpers.util');
class Transactions {
    async get(req, res) {
        try {
            const token = req.headers.authorization;
            const bankAccountTransactions = await sendRequestToThirdParty(token, 'GET', 'BankAccountTransactions/GetTransactions', true, req.query);
            res.send(bankAccountTransactions);
        }
        catch (err) {
            console.error(`Error while getting bank account transactions`, err.message);
        }
    }
    async setBankAccountTransactionErpCode(req, res) {
        try {
            const token = req.headers.authorization;
            const bankAccountTransaction = await sendRequestToThirdParty(token, 'PUT', 'BankAccountTransactions/SetBankAccountTransactionErpCode', true, req.body);
            res.send(bankAccountTransaction);
        }
        catch (err) {
            console.error(`Error while setBankAccountTransactionErpCode`, err.message);
        }
    }
    async create(req, res) {
        try {
        }
        catch (err) {
            console.error(`Error while creating`, err.message);
        }
    }
    async update(req, res) {
        try {
        }
        catch (err) {
            console.error(`Error while updating`, err.message);
        }
    }
    async remove(req, res) {
        try {
        }
        catch (err) {
            console.error(`Error while deleting`, err.message);
        }
    }
}
exports.Transactions = Transactions;
// module.exports = {
//   get,
//   setBankAccountTransactionErpCode,
//   create,
//   update,
//   remove
// };
