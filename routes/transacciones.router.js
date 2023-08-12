import { Router } from "express";
import {
  createTransaccion,
  deleteTransaccion,
  getTransaccionById,
  getTransacciones,
  updateTransaccion,
} from "../services/transacciones.service.js";
import {
  createTransaccionSchema,
  deleteTransaccionSchema,
  updateTransaccionSchema,
} from "../schemas/transacciones.schema.js";
import { validatorHandler } from "../middlewares/validator.handler.js";
const transaccionRouter = Router();

transaccionRouter.get("/", getTransacciones);
transaccionRouter.post(
  "/",
  validatorHandler(createTransaccionSchema, "body"),
  createTransaccion
);
transaccionRouter.get(
  "/:id",
  validatorHandler(deleteTransaccionSchema, "params"),
  getTransaccionById
);
transaccionRouter.patch(
  "/:id",
  validatorHandler(updateTransaccionSchema, "body"),
  validatorHandler(deleteTransaccionSchema, "params"),
  updateTransaccion
);
transaccionRouter.delete(
  "/:id",
  validatorHandler(deleteTransaccionSchema, "params"),
  deleteTransaccion
);

export default transaccionRouter;
