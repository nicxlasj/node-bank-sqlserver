import bcrypt from "bcrypt";
import { getConnection } from "../db/connections.js";
import { sql } from "../db/connections.js";


const pool = await getConnection();

export const createAdmin = async (req, res, next) => {
  try {
    const admin = req.body;
    const hash= await bcrypt.hash(admin.password, 10);
    admin.password= hash;
    console.log(admin);
    const result = await pool
      .request()
      .input("Username", sql.VarChar, admin.username)
      .input("Email", sql.VarChar, admin.email)
      .input("Password", sql.VarChar, admin.password)
      .input("CliId", sql.Int, admin.cliId)
      .input("AdminType", sql.VarChar, admin.adminType)
      .query(
        "EXEC Sp_SaveOrUpdateAdmin 0, @Username, @Email, @Password, @CliId, @AdminType"
      );
      
    res.json(result.recordset);
  } catch (error) {
    next(error);
  }
};
