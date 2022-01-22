import { Router } from 'express';
import { testiranje } from '../controllers/user.controller';

export default (): Router => {
     const router: Router = Router();

     router.get('/', testiranje);


     return router;
};
