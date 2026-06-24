"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const models_1 = require("../models");
exports.apiRouter = (0, express_1.Router)();
exports.apiRouter.get('/users/', async (_request, response, next) => {
    try {
        const users = await models_1.User.find().sort({ name: 1 });
        response.json({ users });
    }
    catch (error) {
        next(error);
    }
});
exports.apiRouter.get('/teams/', async (_request, response, next) => {
    try {
        const teams = await models_1.Team.find().sort({ name: 1 });
        response.json({ teams });
    }
    catch (error) {
        next(error);
    }
});
exports.apiRouter.get('/activities/', async (_request, response, next) => {
    try {
        const activities = await models_1.Activity.find().sort({ completedAt: -1 });
        response.json({ activities });
    }
    catch (error) {
        next(error);
    }
});
exports.apiRouter.get('/leaderboard/', async (_request, response, next) => {
    try {
        const leaderboard = await models_1.Leaderboard.find().sort({ rank: 1 });
        response.json({ leaderboard });
    }
    catch (error) {
        next(error);
    }
});
exports.apiRouter.get('/workouts/', async (_request, response, next) => {
    try {
        const workouts = await models_1.Workout.find().sort({ title: 1 });
        response.json({ workouts });
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=api.js.map