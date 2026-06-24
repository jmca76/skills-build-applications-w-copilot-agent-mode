import { Schema, model } from 'mongoose';

export interface UserProfile {
  name: string;
  email: string;
  role: 'member' | 'coach' | 'admin';
  age: number;
  fitnessGoal: string;
  teamName: string;
}

const userSchema = new Schema<UserProfile>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['member', 'coach', 'admin'], default: 'member' },
    age: { type: Number, required: true },
    fitnessGoal: { type: String, required: true },
    teamName: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = model<UserProfile>('User', userSchema);
