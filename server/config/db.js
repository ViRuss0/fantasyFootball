import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

const connUrl = process.env.DBURL.replace('<password>', process.env.PASSWORD);

mongoose
	.connect(connUrl)
	.then(() => console.log('db connected'))
	.catch((err) => console.log(err));

const teamSchema = new mongoose.Schema({
	name: { type: String, required: true },
	P: { type: [String] },
	D: { type: [String] },
	C: { type: [String] },
	A: { type: [String] },
});

const playerSchema = new mongoose.Schema(
	{
		Giocatore: { type: String, required: true, unique: true },
		Ruolo: String,
		pricePrevYear: Number,
		pricePrediction: Number,
		maxBidPrice: Number,
		'Fanta Index': Number,
		'Fanta Media': Number,
		'Media Voto': Number,
		Partite: Number,
		Titolare: Number,
		'Minuti giocati': Number,
		'% Minuti giocati': Number,
		'Garanzia Voto': Number,
		'Coefficiente Titolarità': Number,
		Goal: Number,
		Assist: Number,
		'Cartellini gialli': Number,
		'Cartellini rossi': Number,
		'Goal subiti': Number,
		'Goal/90min': Number,
		'Expected Goal': Number,
		'Expected Goal P90': Number,
		'Rigori tirati': Number,
		'Rigori segnati': Number,
		'Rigori parati': Number,
		'Reti inviolate': Number,
		'Abilità nei passaggi chiave': Number,
		'Tiro in porta': Number,
		Finalizzazione: Number,
		'Capacità di Dribbling': Number,
		'Precisione nei cross': Number,
		'Precisione nei passaggi': Number,
		'Solidità difensiva': Number,
		'Pericolosità sui Piazzati': Number,
		"Attaccare l'area di rigore": Number,
	},
	{ timestamps: true }
);

export const Player = mongoose.model('player', playerSchema, 'players');
export const Team = mongoose.model('team', teamSchema, 'teams');
