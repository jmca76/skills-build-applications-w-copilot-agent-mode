export interface TeamProfile {
    name: string;
    city: string;
    mascot: string;
    memberCount: number;
    weeklyGoalMinutes: number;
}
export declare const Team: import("mongoose").Model<TeamProfile, {}, {}, {}, import("mongoose").Document<unknown, {}, TeamProfile, {}, import("mongoose").DefaultSchemaOptions> & TeamProfile & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, TeamProfile>;
//# sourceMappingURL=Team.d.ts.map