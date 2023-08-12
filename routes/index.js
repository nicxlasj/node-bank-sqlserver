import { Router } from "express";
import transaccionRouter from "./transacciones.router.js";
import clienteRouter from "./clientes.router.js";
import cubRouter from "./cuentaBancaria.router.js";
import authRouter from "./auth.router.js";


export function routerApi(app){
    const router= Router();
    app.use('/api', router);
    router.use('/transaccion', transaccionRouter);
    router.use('/clientes', clienteRouter);
    router.use('/cub', cubRouter);
    router.use('/auth', authRouter );
}