import { Router } from 'express';
import MembershipController from '../controllers/MembershipController';
import { checkToken } from '../middlewares/checkToken';

const router = Router();

router.post('/add', checkToken, MembershipController.add);
router.delete('/delete', checkToken, MembershipController.remove);
router.patch('/edit', checkToken, MembershipController.edit);
router.get('/associates', MembershipController.associates);

export default router;
