import Joi from "joi";
const trnsId= Joi.number().id();
const cliId = Joi.number().id();
const cubId = Joi.number().id();
const tpoTrnsId = Joi.number().id();
const frmPgoId = Joi.number().id();
const trnsEstadoActivo = Joi.bool();
const monto = Joi.number();

export const createTransaccionSchema= Joi.object({
    trnsId: trnsId,
    cliId: cliId.required(),
    cubId: cubId.required(),
    tpoTrnsId: tpoTrnsId.required(),
    frmPgoId: frmPgoId.required(),
    trnsMonto: monto.required(),
    trnsEstadoActivo: trnsEstadoActivo.required()
});

export const updateTransaccionSchema= Joi.object({
    trnsId: trnsId.required(),
    cliId: cliId.required(),
    cubId: cubId.required(),
    tpoTrnsId: tpoTrnsId.required(),
    frmPgoId: frmPgoId.required(),
    monto: monto.required()
});

export const deleteTransaccionSchema= Joi.object({
    id: trnsId.required(),
});

