import { Router } from 'express';
import { create } from '../controllers/user.controller';

export default (): Router => {
     const router: Router = Router();

     router.post('/', create);

     return router;
};
