import { Router } from 'express';
import { getIndexPage } from '../controllers/itemController';

const router = Router();

router.get('/', getIndexPage);


export default router;