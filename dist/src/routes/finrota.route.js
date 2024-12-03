"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finrotaRouter = void 0;
const finrota_Services_1 = __importDefault(require("../service/finrota.Services"));
const finrotaRouter = async (fastify) => {
    const finrotaService = new finrota_Services_1.default();
    /* GET transactions. */
    fastify.get('/', finrotaService.get);
    /* POST transaction */
    fastify.post('/', finrotaService.create);
    /* PUT transaction */
    fastify.put('/:id', finrotaService.update);
    /* DELETE transaction */
    fastify.delete('/:id', finrotaService.remove);
};
exports.finrotaRouter = finrotaRouter;
