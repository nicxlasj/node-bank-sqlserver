import { getConnection } from "../db/connections.js";
import { sql } from "../db/connections.js";
const pool = await getConnection();

export const getClientes = async (req, res, next) => {
  try {
    const clientes = await pool.request().query("EXEC Sp_GetClients 0");
    res.json(clientes.recordset);
  } catch (error) {
    next(error);
  }
};

export const getClientesById = async (req, res, next) => {
  try {
    const cliId = parseInt(req.params.id);
    const clientes = await pool
      .request()
      .input("CliId", sql.Int, cliId)
      .query("EXEC Sp_GetClients @CliId");
    res.json(clientes.recordset);
  } catch (error) {
    next(error);
  }
};

export const createClientes = async (req, res, next) => {
  try {
    const { tpiId, cliCodigo, cliNombres, cliApellidos, cliEstadoActivo } =
      req.body;
      parseInt(tpiId);
    const cliente = await pool
      .request()
      .input("TpiId", sql.Int, tpiId)
      .input("CliCodigo", sql.VarChar, cliCodigo)
      .input("CliNombres", sql.VarChar, cliNombres)
      .input("CliApellidos", sql.VarChar, cliApellidos)
      .input("CliEstadoActivo", sql.Int, cliEstadoActivo)
      .query(
        "EXEC Sp_SaveOrUpdateClients 0, @TpiId, @CliCodigo, @CliNombres, @CliApellidos, @CliEstadoActivo"
      );
    res.json(cliente);
  } catch (error) {
    next(error);
  }
};

export const updateCliente = async (req, res, next) => {
  try {
    const { tpiId, cliCodigo, cliNombres, cliApellidos, cliEstadoActivo } =
      req.body || null  ;
    const cliId = req.params.id;
    const cliente = await pool
      .request()
      .input("CliId", sql.Int, cliId)
      .input("TpiId", sql.Int, tpiId)
      .input("CliCodigo", sql.Int, cliCodigo)
      .input("CliNombres", sql.VarChar, cliNombres)
      .input("CliApellidos", sql.VarChar, cliApellidos)
      .input("CliEstadoActivo", sql.Int, cliEstadoActivo)
      .query(
        "EXEC Sp_SaveOrUpdateClients @CliId, @TpiId, @CliCodigo, @CliNombres, @CliApellidos, @CliEstadoActivo"
      );
    res.json(cliente.recordset);
  } catch (error) {
    next(error);
  }
};

export const deleteClientes = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const result = await pool
      .request()
      .input("CliId", sql.Int, id)
      .query("EXEC Sp_DeleteClients @CliId");
    res.json(result.affectedRows);
  } catch (error) {
    next(error);
  }
};
