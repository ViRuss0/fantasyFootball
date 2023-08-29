import express from 'express';
import { TeamController } from '../controllers/teamController.js';

const router = express.Router();

router.route('/').get(TeamController.getAllTeams).post(TeamController.addTeam);

router
	.route('/:id')
	.delete(TeamController.deleteTeam)
	.patch(TeamController.updateTeam);

export default router;
