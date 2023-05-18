import express from 'express';
import rutasCard from './routes/card.routes.js';
import rutasClients from './routes/clients.routes.js';
import rutasPaymenth from './routes/paymenth.routes.js';
import { sequelize } from './database/database.js';

async function main(){
    //Manejo de excepciones
    try{
        await sequelize.sync({force:false});
        await sequelize.authenticate();
        console.log("Conexion exitosa");
    }catch(error){
        console.log("Conexion fallida, error -> "+error);
    }
    const app = express();
    app.use(express.json()); 
    app.use(express.urlencoded({extended:false})); 
    app.use(rutasCard); 
    app.use(rutasClients);
    app.use(rutasPaymenth);
    app.listen(3000);
    console.log("El servidor esta escuchando en el puerto 3000");
}

main();


