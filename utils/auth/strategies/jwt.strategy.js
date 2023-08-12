import { Strategy, ExtractJwt } from "passport-jwt";
import { configg } from "../../../config.js";
const options= {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: configg.jwtSecret
};
export const jwtStrategy= new Strategy(options, (payload, done)=>{
    done(null, payload);
});

