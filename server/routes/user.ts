import { Router } from 'express';
import { create } from '../controllers/user.controller';
import auth from '../middleware/auth';

export default (): Router => {
     const router: Router = Router();

     router.post('/', create);

     return router;
};
