import { getConnection } from "../db/connections.js";
import { sql } from "../db/connections.js";

const pool = await getConnection();

export const getTransacciones = async (req, res, next) => {
  try {
    const result = await pool.query("EXEC Sp_GetTransactions 0");
    return res.json(result.recordsets);
  } catch (error) {
    next(error);
  }
};

export const createTransaccion = async (req, res, next) => {
  try {
    const {
      trnsId,
      cliId,
      cubId,
      tpoTrnsId,
      frmPgoId,
      trnsMonto,
      trnsEstadoActivo,
    } = req.body;
    const result = await pool
      .request()
      .input("TrnsId", sql.Int, trnsId)
      .input("CliId", sql.Int, cliId)
      .input("CubId", sql.Int, cubId)
      .input("TpoTrnsId", sql.Int, tpoTrnsId)
      .input("FrmPgoId", sql.Int, frmPgoId)
      .input("TrnsMonto", sql.Decimal, trnsMonto)
      .input("TrnsEstadoActivo", sql.Int, trnsEstadoActivo)
      .query(
        "EXEC Sp_SaveOrUpdateTransactions @TrnsId, @CliId, @CubId, @TpoTrnsId, @FrmPgoId, @TrnsMonto, @TrnsEstadoActivo"
      );
    res.json(result.recordsets);
  } catch (error) {
    next(error);
  }
};

export const getTransaccionById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const transaccion = await pool
      .request()
      .input("TrnsId", sql.Int, id)
      .query("EXEC Sp_GetTransactions @TrnsId");
    res.json(transaccion.recordset);
  } catch (error) {
    next(error);
  }
};

export const updateTransaccion = async (req, res, next) => {
  try {
    const {
      trnsId,
      cliId,
      cubId,
      tpoTrnsId,
      frmPgoId,
      trnsMonto,
      trnsEstadoActivo,
    } = req.body;
    const result = await pool
      .request()
      .input("TrnsId", sql.Int, trnsId)
      .input("CliId", sql.Int, cliId)
      .input("CubId", sql.Int, cubId)
      .input("TpoTrnsId", sql.Int, tpoTrnsId)
      .input("FrmPgoId", sql.Int, frmPgoId)
      .input("TrnsMonto", sql.Decimal, trnsMonto)
      .input("TrnsEstadoActivo", sql.Int, trnsEstadoActivo)
      .query(
        "EXEC Sp_SaveOrUpdateTransactions @TrnsId, @CliId, @CubId, @TpoTrnsId, @FrmPgoId, @TrnsMonto, @TrnsEstadoActivo"
      );
      res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteTransaccion= async(req, res, next)=>{
  try {
    const trnsId= req.body;
    const result= await pool.request().input("TrnsId", sql.Int, trnsId).query('EXEX Sp_DeleteTransaction @TrnsId');
    res.json(result.affectedRows);  
  } catch (error) {
    next(error);
  }
};
