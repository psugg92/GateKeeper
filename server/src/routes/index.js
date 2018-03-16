import { Router } from 'express';
import authRouter from './auth';
import usersRouter from './users';
import stripeDonationsRouter from './stripeDonations';
import nodeRouter from './nodes';
import worldRouter from './worlds';
import npcRouter from './npc';
import trapRouter from './traps';
import treasureRouter from './treasures';
import campaignRouter from './campaigns';
import nodeRef from './noderef'
import singleCampaign from './singleCampaign'
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);
router.use('/donate', stripeDonationsRouter);


router.use(tokenMiddleware);
router.use(isLoggedIn);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/singleCampaign', singleCampaign);
router.use('/traps', trapRouter);
router.use('/users', usersRouter);
router.use('/nodes', nodeRouter);
router.use('/worlds', worldRouter);
router.use('/npc', npcRouter);
router.use('/campaigns', campaignRouter);
router.use('/treasures', treasureRouter);
router.use('/noderef', nodeRef)
// router.use('/traps', trapRouter);

export default router;