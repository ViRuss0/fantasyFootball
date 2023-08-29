import { Team } from '../config/db.js';

export class TeamController {
	static async getAllTeams(req, res) {
		try {
			const data = await Team.find();
			console.log('here');
			res.status(200).json({ data });
		} catch (err) {
			res.json(err);
		}
	}
	static async filterTeam(req, res) {
		const data = await Team.find({ ...req.body.lte });
	}
	static async addTeam(req, res) {
		try {
			const newTeam = new Team(req.body);
			const data = await newTeam.save();
			res.status(201).json({ data, status: 'ok' });
		} catch (err) {
			res.json(err);
		}
	}

	static async updateTeam(req, res) {
		try {
			const { id } = req.params;
			const data = await Team.findByIdAndUpdate(id, req.body, { new: true });
			console.log(req.body);
			res.status(200).json({ data, status: 'ok' });
		} catch (err) {
			res.json(err);
		}
	}

	static async deleteTeam(req, res) {
		const { id } = req.params;
		console.log(id);
		const resp = await Team.findByIdAndDelete(id);
		res.status(200).json(resp);
	}
}
