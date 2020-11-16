import { Router } from 'express';

import * as gameController from '../controllers/games';
import { gameValidator } from '../validators/gameValidator';

const router = Router();

/**
 * GET /api/games/new
 */
router.get('/new', gameController.create);

/**
 * POST /api/games/join
 */
router.post('/join/:id', gameValidator, gameController.join);

export default router;
