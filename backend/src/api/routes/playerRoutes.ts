import { Router } from 'express';
import PlayerController from '../controllers/PlayerController';

const router = Router();

router.get('/', PlayerController.getPlayers);
router.post('/add', PlayerController.add);
router.get('/:id', PlayerController.getPlayer);
router.patch('/edit/:id', PlayerController.editPlayer);
router.delete('/remove/:id', PlayerController.removePlayer);

export default router;
