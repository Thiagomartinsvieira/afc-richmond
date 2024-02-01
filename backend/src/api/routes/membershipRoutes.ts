import { Router } from 'express';
import MembershipController from '../controllers/MembershipController';
import { checkToken } from '../middlewares/checkToken';

const router = Router();

router.post('/add', checkToken, MembershipController.add);

export default router;
