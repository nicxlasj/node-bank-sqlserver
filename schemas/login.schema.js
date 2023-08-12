import Joi from "joi";
const email= Joi.string().email();
const password= Joi.string().min(4);

export const loginSchema= Joi.object({
    email: email.required(),
    password: password.required()
})