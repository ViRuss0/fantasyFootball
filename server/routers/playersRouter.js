import express from 'express';
import { PlayerController } from '../controllers/playerController.js';

const router = express.Router();

router
	.route('/')
	.get(PlayerController.getAllPlayers)
	.post(PlayerController.addPlayer);

router
	.route('/:id')
	.delete(PlayerController.deletePlayer)
	.patch(PlayerController.updatePlayer);

export default router;
