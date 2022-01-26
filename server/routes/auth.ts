import { Router } from 'express';
import { login } from '../controllers/auth.controller';

export default () => {
     const router = Router();

     router.post('/login', login);

     return router;
};
