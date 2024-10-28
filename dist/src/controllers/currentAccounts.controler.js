"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { sendRequestToThirdParty } = require('../utils/helpers.util');
async function getErpCurrentAccounts(req, res) {
    try {
        const token = req.headers.authorization;
        const erpCurrentAccounts = await sendRequestToThirdParty(token, 'GET', 'CurrentAccounts/GetErpCurrentAccounts', false, req.query);
        res.send(erpCurrentAccounts);
    }
    catch (err) {
        console.error(`Error while getErpCurrentAccounts`, err.message);
    }
}
async function createOrUpdateCurrentAccount(req, res) {
    try {
        const token = req.headers.authorization;
        const currentAccount = await sendRequestToThirdParty(token, 'POST', 'CurrentAccounts/CreateOrUpdate', false, req.body);
        res.send(currentAccount);
    }
    catch (err) {
        console.error(`Error while creating`, err.message);
    }
}
module.exports = {
    getErpCurrentAccounts,
    createOrUpdateCurrentAccount,
};