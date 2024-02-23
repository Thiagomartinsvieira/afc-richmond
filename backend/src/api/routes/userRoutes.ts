import { Router } from 'express';
import UserController from '../controllers/UserController';
import { checkToken } from '../middlewares/checkToken';

const router = Router();

router.get('/', UserController.getUsers);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/:id', checkToken, UserController.getUserInfo);
router.patch('/edit/:id', checkToken, UserController.editUser);
router.delete('/delete/:id', checkToken, UserController.deleteUser);

export default router;
