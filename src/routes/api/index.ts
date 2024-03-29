import { Router } from 'express';
import cardIdRouter from './cardId';

const router = Router();

router.use('/', cardIdRouter);

export default router;
