import Joi from "joi";
const adminId= Joi.number().id();
const cliId = Joi.number().id();
const username= Joi.string();
const email= Joi.string().email();
const password= Joi.string();
const adminType= Joi.string();

export const createAdminSchema= Joi.object({
    username: username.required(),
    cliId: cliId.required(),
    email: email.required(),
    password: password.required(),
    adminType: adminType.required()
})