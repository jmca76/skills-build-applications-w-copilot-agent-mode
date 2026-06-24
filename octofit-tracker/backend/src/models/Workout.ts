import { Schema, model } from 'mongoose';

export interface WorkoutSuggestion {
  title: string;
  focusArea: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  exercises: string[];
}

const workoutSchema = new Schema<WorkoutSuggestion>(
  {
    title: { type: String, required: true },
    focusArea: { type: String, required: true },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    durationMinutes: { type: Number, required: true },
    exercises: { type: [String], required: true },
  },
  { timestamps: true },
);

export const Workout = model<WorkoutSuggestion>('Workout', workoutSchema);
