import { connectToDatabase, disconnectFromDatabase } from '../config/database';
import { Activity, Leaderboard, Team, User, Workout } from '../models';

const users = [
  {
    name: 'Maya Chen',
    email: 'maya.chen@example.com',
    role: 'coach',
    age: 34,
    fitnessGoal: 'Improve endurance for a half marathon',
    teamName: 'Velocity Vipers',
  },
  {
    name: 'Jordan Rivera',
    email: 'jordan.rivera@example.com',
    role: 'member',
    age: 29,
    fitnessGoal: 'Build strength and consistency',
    teamName: 'Core Crushers',
  },
  {
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    role: 'member',
    age: 41,
    fitnessGoal: 'Increase weekly activity minutes',
    teamName: 'Stride Squad',
  },
  {
    name: 'Evan Brooks',
    email: 'evan.brooks@example.com',
    role: 'admin',
    age: 37,
    fitnessGoal: 'Maintain balanced training',
    teamName: 'Velocity Vipers',
  },
];

const teams = [
  {
    name: 'Velocity Vipers',
    city: 'Seattle',
    mascot: 'Viper',
    memberCount: 12,
    weeklyGoalMinutes: 2400,
  },
  {
    name: 'Core Crushers',
    city: 'Austin',
    mascot: 'Kettlebell',
    memberCount: 9,
    weeklyGoalMinutes: 1800,
  },
  {
    name: 'Stride Squad',
    city: 'Denver',
    mascot: 'Running Shoe',
    memberCount: 15,
    weeklyGoalMinutes: 3000,
  },
];

const activities = [
  {
    userEmail: 'maya.chen@example.com',
    activityType: 'Trail run',
    durationMinutes: 52,
    caloriesBurned: 510,
    completedAt: new Date('2026-06-21T07:30:00.000Z'),
  },
  {
    userEmail: 'jordan.rivera@example.com',
    activityType: 'Strength training',
    durationMinutes: 45,
    caloriesBurned: 390,
    completedAt: new Date('2026-06-21T18:15:00.000Z'),
  },
  {
    userEmail: 'priya.patel@example.com',
    activityType: 'Cycling',
    durationMinutes: 60,
    caloriesBurned: 560,
    completedAt: new Date('2026-06-22T06:45:00.000Z'),
  },
  {
    userEmail: 'evan.brooks@example.com',
    activityType: 'Yoga mobility',
    durationMinutes: 35,
    caloriesBurned: 180,
    completedAt: new Date('2026-06-22T20:00:00.000Z'),
  },
];

const leaderboard = [
  {
    userEmail: 'priya.patel@example.com',
    userName: 'Priya Patel',
    teamName: 'Stride Squad',
    points: 1320,
    rank: 1,
  },
  {
    userEmail: 'maya.chen@example.com',
    userName: 'Maya Chen',
    teamName: 'Velocity Vipers',
    points: 1265,
    rank: 2,
  },
  {
    userEmail: 'jordan.rivera@example.com',
    userName: 'Jordan Rivera',
    teamName: 'Core Crushers',
    points: 1110,
    rank: 3,
  },
  {
    userEmail: 'evan.brooks@example.com',
    userName: 'Evan Brooks',
    teamName: 'Velocity Vipers',
    points: 980,
    rank: 4,
  },
];

const workouts = [
  {
    title: 'Endurance Builder',
    focusArea: 'Cardio',
    difficulty: 'intermediate',
    durationMinutes: 40,
    exercises: ['Warm-up jog', 'Tempo intervals', 'Cooldown walk'],
  },
  {
    title: 'Foundational Strength',
    focusArea: 'Full body',
    difficulty: 'beginner',
    durationMinutes: 35,
    exercises: ['Goblet squats', 'Push-ups', 'Dumbbell rows', 'Plank holds'],
  },
  {
    title: 'Power Circuit',
    focusArea: 'Conditioning',
    difficulty: 'advanced',
    durationMinutes: 30,
    exercises: ['Burpees', 'Kettlebell swings', 'Box jumps', 'Mountain climbers'],
  },
];

const seedDatabase = async (): Promise<void> => {
  console.log('Seed the octofit_db database with test data');
  await connectToDatabase();

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  await Promise.all([
    User.insertMany(users),
    Team.insertMany(teams),
    Activity.insertMany(activities),
    Leaderboard.insertMany(leaderboard),
    Workout.insertMany(workouts),
  ]);

  console.log(`Seeded ${users.length} users`);
  console.log(`Seeded ${teams.length} teams`);
  console.log(`Seeded ${activities.length} activities`);
  console.log(`Seeded ${leaderboard.length} leaderboard entries`);
  console.log(`Seeded ${workouts.length} workouts`);
};

seedDatabase()
  .catch((error: unknown) => {
    console.error('Failed to seed octofit_db');
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await disconnectFromDatabase();
  });
