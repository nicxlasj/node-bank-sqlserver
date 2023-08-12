import { Router } from "express";
import {
  createClientes,
  deleteClientes,
  getClientes,
  getClientesById,
  updateCliente,
} from "../services/clientes.service.js";
import { validatorHandler } from "../middlewares/validator.handler.js";
import {
  createClienteSchema,
  deleteClienteSchema,
  updateClienteSchema,
} from "../schemas/clientes.schema.js";
const clienteRouter = Router();

clienteRouter.get("/", getClientes);
clienteRouter.get("/:id", getClientesById);
clienteRouter.post(
  "/",
  validatorHandler(createClienteSchema, "body"),
  createClientes
);
clienteRouter.delete(
  "/:id",
  validatorHandler(deleteClienteSchema, "params"),
  deleteClientes
);
clienteRouter.patch(
  "/:id",
  validatorHandler(updateClienteSchema, "body"),
  updateCliente
);

export default clienteRouter;
