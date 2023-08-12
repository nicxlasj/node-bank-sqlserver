import { getConnection } from "../db/connections.js";
import { sql } from "../db/connections.js";
const pool = await getConnection();

export const getCuentasBancarias = async (req, res, next) => {
  try {
    const result = await pool.query("EXEC Sp_GetCuentaBancaria");
    res.json(result.recordset);
  } catch (error) {
    next(error);
  }
};

export const getCuentasBancariasById = async (req, res, next) => {
  try {
    const cubId = parseInt(req.params.cubId);
    const result = await pool
      .request()
      .input("CubId", sql.Int, cubId)
      .query("EXEC Sp_GetCuentaBancaria @CubId");
    res.json(result.recordset);
  } catch (error) {
    next(error);
  }
};

export const createCuentaBancaria = async (req, res, next) => {
  try {
    const { tpcId, bcoId, cliId, cubCodigo, cubDescripcion, cubEstadoActivo } =
      req.body;
    const cub = await pool
      .request()
      .input("TpcId", sql.Int, tpcId)
      .input("BcoId", sql.Int, bcoId)
      .input("CliId", sql.Int, cliId)
      .input("CubCodigo", sql.VarChar, cubCodigo)
      .input("CubDescripcion", sql.VarChar, cubDescripcion)
      .input("CubEstadoActivo", sql.Int, cubEstadoActivo)
      .query(
        "EXEC Sp_SaveOrUpdateCuentaBancaria 0, @TpcId, @BcoId, @CliId, @CubCodigo, @CubDescripcion, @CubEstadoActivo"
      );
    res.json(cub.recordset);
  } catch (error) {
    next(error);
  }
};

export const updateCuentaBancaria = async (req, res, next) => {
  try {
    const { tpcId, bcoId, cliId, cubCodigo, cubDescripcion, cubEstadoActivo } =
      req.body;
    const cubId = parseInt(req.params.cubId);
    const cub = await pool
      .request()
      .input("CubId", sql.Int, cubId)
      .input("TpcId", sql.Int, tpcId)
      .input("BcoId", sql.Int, bcoId)
      .input("CliId", sql.Int, cliId)
      .input("CubCodigo", sql.VarChar, cubCodigo)
      .input("CubDescripcion", sql.VarChar, cubDescripcion)
      .input("CubEstadoActivo", sql.Int, cubEstadoActivo)
      .query(
        "EXEC Sp_SaveOrUpdateCuentaBancaria @CubId, @TpcId, @BcoId, @CliId, @CubCodigo, @CubDescripcion, @CubEstadoActivo"
      );
    res.json(cub.recordset);
  } catch (error) {
    next(error);
  }
};

export const deleteCuentaBancaria = async (req, res, next) => {
  try {
    const cubId = parseInt(req.params.cubId);
    const affectedRows = await pool
      .request()
      .input("CubId", sql.Int, cubId)
      .query("EXEC Sp_DeleteCuentaBancaria @CubId");
    res.json(affectedRows.affectedRows);
  } catch (error) {
    next(error);
  }
};
