import { badRequest, notFound, unauthorized } from "@hapi/boom";
import { getConnection } from "../db/connections.js";
import { sql } from "../db/connections.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configg } from "../config.js";

const pool = await getConnection();

export const getAdmin = async (email, password) => {
  try {
    const result = await pool
      .request().query("Sp_QueryAdmin @Email= '" +email + "'" );
    const admin= result.recordset[0];
    if (admin === {}) {
      notFound("No estás autorizado");
    }
    const isMatch = await bcrypt.compare(password, admin.Password);
    if (!isMatch) {
      badRequest("La contraseña es incorrecta");
    }
    return admin;
  } catch (error) {
    console.log(error);
  }
};

export const signToken = async (req, res, next) => {
  try {
    const admin = req.user;
    const payload = {
      sub: admin.AdminId,
      role: admin.AdminType,
    };
    const token = jwt.sign(payload, configg.jwtSecret);
    res.json({
      admin,
      token,
    });
  } catch (error) {
    next(error);
  }
};
