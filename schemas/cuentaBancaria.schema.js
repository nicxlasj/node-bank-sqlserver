import Joi from "joi";
const cubId= Joi.number().integer().id();
const tpcId= Joi.number().integer().id();
const bcoId= Joi.number().integer().id();
const cliId= Joi.number().integer().id();
const cubCodigo= Joi.string().max(25);
const cubDescripcion= Joi.string().max(200);
const cubEstadoActivo= Joi.number().integer();

export const createCuentaBancariaSchema= Joi.object({
    tpcId: tpcId.required(),
    bcoId: bcoId.required(),
    cliId: cliId.required(),
    cubCodigo: cubCodigo.required(),
    cubDescripcion: cubDescripcion.required(),
    cubEstadoActivo: cubEstadoActivo.required()
});

export const updateCuentaBancariaSchema= Joi.object({
    tpcId: tpcId,
    bcoId: bcoId,
    cliId: cliId,
    cubCodigo: cubCodigo,
    cubDescripcion: cubDescripcion
});

export const deleteCuentaBancariaSchema= Joi.object({
    cubId: cubId.required()
});





