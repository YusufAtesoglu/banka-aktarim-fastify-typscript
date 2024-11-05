"use strict";
// import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
// // import cors from "@fastify/cors"
// import {transactionsRouter}from "./src/routes/transactions.route"
// import {accountPlanCodesRouter}from "./src/routes/accountPlanCodes.route"
// import {currentAccountsRouter}from "./src/routes/currentAccounts.route"
// import {bankAccountsRouter}from "./src/routes/bankAccounts.route"
// import fastify from 'fastify';
// import ConnectToDatabase from './src/entities/dataSource';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const transactions_route_1 = require("./src/routes/transactions.route");
const accountPlanCodes_route_1 = require("./src/routes/accountPlanCodes.route");
const currentAccounts_route_1 = require("./src/routes/currentAccounts.route");
const bankAccounts_route_1 = require("./src/routes/bankAccounts.route");
const dataSource_1 = __importDefault(require("./src/entities/dataSource"));
// Fastify uygulamasını başlat
const app = (0, fastify_1.default)();
const port = Number(process.env.PORT) || 3700;
const dbConnection = new dataSource_1.default();
// Yönlendiricileri kaydet
app.register(transactions_route_1.transactionsRouter, { prefix: '/transactions' });
app.register(accountPlanCodes_route_1.accountPlanCodesRouter, { prefix: '/accountPlanCodes' });
app.register(currentAccounts_route_1.currentAccountsRouter, { prefix: '/currentAccounts' });
app.register(bankAccounts_route_1.bankAccountsRouter, { prefix: '/bankAccounts' });
// Hata işleyicisini ayarla
app.setErrorHandler((error, req, res) => {
    const statusCode = error.statusCode || 500;
    console.error(error.message, error.stack);
    res.status(statusCode).send({ message: error.message });
});
// Sunucu başlatma fonksiyonu
const startServer = async () => {
    try {
        // Veritabanı bağlantısını başlat
        await dbConnection.connectToDatabase();
        // Sunucuyu başlat
        app.listen({ port, host: '0.0.0.0' }, (err, address) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log(`Server listening at ${address}`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1); // Başlatılamazsa uygulamayı kapat
    }
};
// Sunucuyu başlat
startServer();
