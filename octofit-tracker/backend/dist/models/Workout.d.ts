export interface WorkoutSuggestion {
    title: string;
    focusArea: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    durationMinutes: number;
    exercises: string[];
}
export declare const Workout: import("mongoose").Model<WorkoutSuggestion, {}, {}, {}, import("mongoose").Document<unknown, {}, WorkoutSuggestion, {}, import("mongoose").DefaultSchemaOptions> & WorkoutSuggestion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, WorkoutSuggestion>;
//# sourceMappingURL=Workout.d.ts.map