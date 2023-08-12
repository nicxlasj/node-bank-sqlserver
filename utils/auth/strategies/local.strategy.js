import { Strategy } from "passport-local";
import { getAdmin } from "../../../services/auth.service.js";

export const LocalStrategy= new Strategy({usernameField: 'email'}, async(email, password, done)=> {
    try {
        
        const admin = await getAdmin(email, password);
        done(null, admin);
    } catch (error) {
        done(error, null);
    }
});
  