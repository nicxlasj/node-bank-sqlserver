import sql from "mssql";
import { configg } from "../config.js";
import { errorHandler } from "../middlewares/error.handler.js";
const config = {
  user: configg.user,
  password: configg.password,
  server: configg.server,
  database: configg.database,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (error) {
    errorHandler(error);
  }
};
export {sql};
