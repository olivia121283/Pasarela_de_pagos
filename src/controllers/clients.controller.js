import modelosInit from '../models/init-models.js';
import {sequelize} from '../database/database.js';

let modelos = modelosInit(sequelize);

export const  getClients = async (req, res) =>{
  let response;
  try {
    response = await modelos.clients.findAll();
  } catch (error) {
    console.error(error);
    res.status(500).json ({"error": error});
  }
  res.status(200).json(response)

}

export const  createClients = async (req, res) =>{
  let {id_client, name, contract_end,clabe} = req.body;
  let response = null;
  try {
    response = await modelos.clients.create ({
      id_client,
      name,
      contract_end,
      clabe
    });
  } catch (error) {
    console.error(error);
    res.status(500).json ({"error": error});
  }
  res.status(200).json(response)
}

export const  changeClients = async (req, res) =>{
  let response;
  let {id} = req.params;
  try {
    response = await modelos.clients.update(req.body,{where:{id_client:id}})
  } catch (error) {
    console.error(error);
    res.status(500).json ({"error": error});
  }
  res.status(200).json(response)

}

export const  deleteClients = async (req, res) =>{
  let response;
  let {id_client} = req.params;
  try {
    response = await modelos.clients.destroy({where:{id_client}});
  } catch (error) {
    console.error(error);
    res.status(500).json ({"error": error});
  }
  res.status(200).json(response)

}