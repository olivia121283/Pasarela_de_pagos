import {Router} from 'express';
import {getClients,createClients, changeClients, deleteClients} from '../controllers/clients.controller.js';
const router = Router();

router.get('/api/getClients', getClients);
router.post('/api/createClients', createClients);
router.put('/api/changeClients/:id', changeClients);
router.delete('/api/deleteClients/:id_client', deleteClients);

export default router;