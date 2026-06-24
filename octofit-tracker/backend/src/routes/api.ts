import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from '../models';

export const apiRouter = Router();

apiRouter.get('/users/', async (_request, response, next) => {
  try {
    const users = await User.find().sort({ name: 1 });
    response.json({ users });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/teams/', async (_request, response, next) => {
  try {
    const teams = await Team.find().sort({ name: 1 });
    response.json({ teams });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/activities/', async (_request, response, next) => {
  try {
    const activities = await Activity.find().sort({ completedAt: -1 });
    response.json({ activities });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/leaderboard/', async (_request, response, next) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ rank: 1 });
    response.json({ leaderboard });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/workouts/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ title: 1 });
    response.json({ workouts });
  } catch (error) {
    next(error);
  }
});
