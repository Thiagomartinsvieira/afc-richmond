import { Router } from 'express';
import PlayerController from '../controllers/PlayerController';
import { checkAuth } from '../middlewares/checkAuth';
import { checkToken } from '../middlewares/checkToken';

const router = Router();

router.get('/', PlayerController.getPlayers);
router.post('/add', checkToken, checkAuth, PlayerController.add);
router.get('/:id', PlayerController.getPlayer);
router.patch('/edit/:id', checkToken, checkAuth, PlayerController.editPlayer);
router.delete(
  '/delete/:id',
  checkToken,
  checkAuth,
  PlayerController.removePlayer
);

export default router;
