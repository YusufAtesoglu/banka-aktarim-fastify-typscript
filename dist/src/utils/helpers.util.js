"use strict";
const config = require("../configs/general.config");
async function sendRequestToThirdParty(token, method, url, isNte, body) {
    const headers = { 'Content-Type': 'application/json',
        'Authorization': token,
    };
    let options = {
        method,
        headers,
        ...(method === 'POST' || method === 'PUT' ? { body: JSON.stringify(body) } : {}),
    };
    if (['POST', 'PUT'].includes(method)) {
        options = { ...options, body: JSON.stringify(body) };
    }
    let baseApiUrl = config.baseUrlNte;
    if (isNte === false) {
        baseApiUrl = config.baseUrlTnt;
    }
    // console.log(method, baseApiUrl + url, body);
    let result = null;
    try {
        const response = await fetch(baseApiUrl + url, options);
        result = await response.json();
        // console.log(result);
    }
    catch (error) {
        console.error(error);
    }
    return result;
}
module.exports = {
    sendRequestToThirdParty
};
