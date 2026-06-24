import { Schema, model } from 'mongoose';

export interface TeamProfile {
  name: string;
  city: string;
  mascot: string;
  memberCount: number;
  weeklyGoalMinutes: number;
}

const teamSchema = new Schema<TeamProfile>(
  {
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    mascot: { type: String, required: true },
    memberCount: { type: Number, required: true },
    weeklyGoalMinutes: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Team = model<TeamProfile>('Team', teamSchema);
