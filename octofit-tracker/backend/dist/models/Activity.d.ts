export interface ActivityRecord {
    userEmail: string;
    activityType: string;
    durationMinutes: number;
    caloriesBurned: number;
    completedAt: Date;
}
export declare const Activity: import("mongoose").Model<ActivityRecord, {}, {}, {}, import("mongoose").Document<unknown, {}, ActivityRecord, {}, import("mongoose").DefaultSchemaOptions> & ActivityRecord & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, ActivityRecord>;
//# sourceMappingURL=Activity.d.ts.map