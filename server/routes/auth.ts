import { Router } from 'express';
import { login, register, me, verify } from '../controllers/auth.controller';
import auth from '../middleware/auth';

export default () => {
     const router = Router();

     router.post('/login', login);
     router.post('/register', register);
     router.get('/me', auth(), me);
     router.post('/verification/:verifyId', verify);

     return router;
};
