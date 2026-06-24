import { Schema, model } from 'mongoose';

export interface LeaderboardEntry {
  userEmail: string;
  userName: string;
  teamName: string;
  points: number;
  rank: number;
}

const leaderboardSchema = new Schema<LeaderboardEntry>(
  {
    userEmail: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    teamName: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Leaderboard = model<LeaderboardEntry>('Leaderboard', leaderboardSchema);
