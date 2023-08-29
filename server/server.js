import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import playersRouter from './routers/playersRouter.js';
import teamsRouter from './routers/teamsRouter.js';

const app = express();

dotenv.config({ path: './config/config.env' });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/players', playersRouter);
app.use('/api/teams', teamsRouter);

app.listen(process.env.PORT);
