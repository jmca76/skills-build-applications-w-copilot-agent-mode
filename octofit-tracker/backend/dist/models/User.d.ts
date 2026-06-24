export interface UserProfile {
    name: string;
    email: string;
    role: 'member' | 'coach' | 'admin';
    age: number;
    fitnessGoal: string;
    teamName: string;
}
export declare const User: import("mongoose").Model<UserProfile, {}, {}, {}, import("mongoose").Document<unknown, {}, UserProfile, {}, import("mongoose").DefaultSchemaOptions> & UserProfile & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, UserProfile>;
//# sourceMappingURL=User.d.ts.map