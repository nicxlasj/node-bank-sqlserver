import Joi from "joi";
const cliId= Joi.number().id();
const tpiId = Joi.number().id();
const cliCodigo= Joi.string();
const cliNombres= Joi.string();
const cliApellidos= Joi.string();
const cliEstadoActivo = Joi.bool();

export const createClienteSchema= Joi.object({
    tpiId: tpiId.required(),
    cliCodigo: cliCodigo.required(),
    cliNombres: cliNombres.required(),
    cliApellidos: cliApellidos.required(),
    cliEstadoActivo: cliEstadoActivo.required()

});

export const updateClienteSchema= Joi.object({
    tpiId: tpiId,
    cliCodigo: cliCodigo,
    cliNombres: cliNombres,
    cliApellidos: cliApellidos,
    cliEstadoActivo: cliEstadoActivo
});

export const deleteClienteSchema= Joi.object({
    cliId: cliId.required()
});
