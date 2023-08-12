import { Router } from "express";
import {
  createCuentaBancaria,
  deleteCuentaBancaria,
  getCuentasBancarias,
  getCuentasBancariasById,
  updateCuentaBancaria,
} from "../services/cuentaBancaria.service.js";
import { validatorHandler } from "../middlewares/validator.handler.js";
import {
  createCuentaBancariaSchema,
  deleteCuentaBancariaSchema,
  updateCuentaBancariaSchema,
} from "../schemas/cuentaBancaria.schema.js";
import { getClientesById } from "../services/clientes.service.js";
import passport from "passport";
import { checkRole } from "../middlewares/auth.handler.js";

const cubRouter = Router();

cubRouter.get("/", getCuentasBancarias);
cubRouter.get(
  "/:cubId",
  validatorHandler(deleteCuentaBancariaSchema, "params"),
  passport.authenticate('jwt', {session: false}),
  checkRole('user'),
  getCuentasBancariasById
);
cubRouter.post(
  "/",
  validatorHandler(createCuentaBancariaSchema, "body"),
  passport.authenticate('jwt', {session: false}),
  checkRole('user'),
  createCuentaBancaria
);
cubRouter.patch(
  "/:cubId",
  validatorHandler(updateCuentaBancariaSchema, "body"),
  validatorHandler(deleteCuentaBancariaSchema, "params"),
  updateCuentaBancaria
);
cubRouter.delete(
  "/:cubId",
  validatorHandler(deleteCuentaBancariaSchema, "params"),
  deleteCuentaBancaria
);

export default cubRouter;
