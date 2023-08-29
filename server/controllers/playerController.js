import { Player } from '../config/db.js';

export class PlayerController {
	static async getAllPlayers(req, res) {
		try {
			const data = await Player.find();
			console.log('here');
			res.status(200).json({ data });
		} catch (err) {
			res.json(err);
		}
	}
	static async filterPlayer(req, res) {
		const data = await Player.find({ ...req.body.lte });
	}
	static async addPlayer(req, res) {
		try {
			const newPlayer = new Player(req.body);
			const data = await newPlayer.save();
			res.status(201).json({ data, status: 'ok' });
		} catch (err) {
			res.json(err);
		}
	}

	static async updatePlayer(req, res) {
		try {
			const { id } = req.params;
			const data = await Player.findByIdAndUpdate(id, req.body, { new: true });
			console.log(req.body);
			res.status(200).json({ data, status: 'ok' });
		} catch (err) {
			res.json(err);
		}
	}

	static async deletePlayer(req, res) {
		const { id } = req.params;
		const resp = await Player.findByIdAndDelete(id);
		res.status(200).json(resp);
	}
}
