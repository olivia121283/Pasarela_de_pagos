import modelosInit from '../models/init-models.js';
import {sequelize} from '../database/database.js';

let modelos = modelosInit(sequelize);

export const  getPaymenth = async (req, res) =>{
  let response;
  try {
    response = await modelos.paymenth_methods.findAll();
  } catch (error) {
    console.error(error);
    res.status(500).json ({"error": error});
  }
  res.status(200).json(response)
}

export const  createPaymenth = async (req, res) =>{
  let {id_paymenthm, name, transaction_fee, transaction_limit} = req.body;
  let response = null;
  try {
    response = await modelos.paymenth_methods.create ({
      id_paymenthm,
      name,
      transaction_fee,
      transaction_limit
    });
  } catch (error) {
    console.error(error);
    res.status(500).json ({"error": error});
  }
  res.status(200).json(response)
}

export const  changePaymenth = async (req, res) =>{
  let response;
  let {id} = req.params;
  try {
    response = await modelos.paymenth_methods.update(req.body,{where:{id_paymenthm:id}})
  } catch (error) {
    console.error(error);
    res.status(500).json ({"error": error});
  }
  res.status(200).json(response)
}

export const  deletePaymenth= async (req, res) =>{
  let response;
  let {id_paymenthm} = req.params;
  try {
    response = await modelos.paymenth_methods.destroy({where:{id_paymenthm}});
  } catch (error) {
    console.error(error);
    res.status(500).json ({"error": error});
  }
  res.status(200).json(response)
}