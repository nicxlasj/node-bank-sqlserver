import express from "express";
const app= express();
import { routerApi } from "./routes/index.js";
import { boomErrorHandler, errorHandler, logErrors } from "./middlewares/error.handler.js";
import {LocalStrategy} from "./utils/auth/strategies/local.strategy.js";
import passport from "passport";
import { jwtStrategy } from "./utils/auth/strategies/jwt.strategy.js";

app.use(express.json());
app.get('/hi', (req, res)=> {
    res.send('Buenas');
})
routerApi(app);


passport.use(LocalStrategy);
passport.use(jwtStrategy);
app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);


export default app;