import { Router } from 'express';
import { login, register, me, verify, forgotPassword } from '../controllers/auth.controller';
import auth from '../middleware/auth';

export default () => {
     const router = Router();

     router.post('/login', login);
     router.post('/register', register);
     router.get('/me', auth(), me);
     router.post('/verification/:verifyId', verify);
     router.post('/reset-password/', forgotPassword);

     return router;
};
