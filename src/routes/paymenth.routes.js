import {Router} from 'express';
import {getPaymenth,createPaymenth, changePaymenth, deletePaymenth} from '../controllers/paymenth.controller.js';
const router = Router();

router.get('/api/getPaymenth', getPaymenth);
router.post('/api/createPaymenth', createPaymenth);
router.put('/api/changePaymenth/:id', changePaymenth);
router.delete('/api/deletePaymenth/:id_paymenthm', deletePaymenth);

export default router;