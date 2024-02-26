import { Router } from 'express';
import PlayerController from '../controllers/PlayerController';

const router = Router();

router.post('/add', PlayerController.add);
router.get('/:id', PlayerController.getPlayer);

export default router;
