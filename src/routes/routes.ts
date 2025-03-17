import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping)
router.get('/hello', ApiController.hello)


router


export default router;
