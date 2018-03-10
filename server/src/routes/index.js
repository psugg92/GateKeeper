import { Router } from 'express';
import authRouter from './auth';
import usersRouter from './users';
import stripeDonationsRouter from './stripeDonations';
import nodeRouter from './nodes';
import worldRouter from './worlds';
import npcRouter from './npc';
import trapRouter from './traps';
import campaignRouter from './campaigns';
// import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);
router.use('/donate', stripeDonationsRouter);

// router.route('*')
//     .post(tokenMiddleware, isLoggedIn)
//     .put(tokenMiddleware, isLoggedIn)
//     .delete(tokenMiddleware, isLoggedIn);

router.use('/traps', trapRouter);
router.use('/users', usersRouter);
router.use('/nodes', nodeRouter);
router.use('/worlds', worldRouter);
router.use('/npc', npcRouter);
router.use('/campaigns', campaignRouter);
// router.use('/traps', trapRouter);

export default router;