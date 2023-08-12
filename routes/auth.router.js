import { Router } from "express";
import { validatorHandler } from "../middlewares/validator.handler.js";
import { createAdminSchema} from "../schemas/admin.schema.js";
import { createAdmin } from "../services/admin.service.js";
import { loginSchema } from "../schemas/login.schema.js";
import passport from "passport";
import { signToken } from "../services/auth.service.js";
const authRouter= Router();

authRouter.post('/admin', validatorHandler(createAdminSchema, 'body'), createAdmin);
authRouter.post('/login', passport.authenticate("local", {session: false}), signToken)

export default authRouter;