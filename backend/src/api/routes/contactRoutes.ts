import { Router } from 'express';
import ContactController from '../controllers/ContactController';
import { toMinutes } from '../helpers/time-conversion';
import { apiRequestLimiter } from '../middlewares/apiRequestLimiter';
import { checkToken } from '../middlewares/checkToken';

const router = Router();

router.post(
  '/',
  checkToken,
  apiRequestLimiter(toMinutes(60), 3),
  ContactController.getContact
);

export default router;
