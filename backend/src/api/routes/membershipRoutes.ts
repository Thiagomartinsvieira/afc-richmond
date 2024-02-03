import { Router } from 'express';
import MembershipController from '../controllers/MembershipController';
import { checkToken } from '../middlewares/checkToken';

const router = Router();

router.post('/add', checkToken, MembershipController.add);
router.post('/remove', checkToken, MembershipController.remove);
router.patch('/edit', checkToken, MembershipController.edit)
router.get('/list', MembershipController.list)
router.get('/associates', MembershipController.associates)

export default router;
