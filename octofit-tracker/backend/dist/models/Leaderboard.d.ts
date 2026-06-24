export interface LeaderboardEntry {
    userEmail: string;
    userName: string;
    teamName: string;
    points: number;
    rank: number;
}
export declare const Leaderboard: import("mongoose").Model<LeaderboardEntry, {}, {}, {}, import("mongoose").Document<unknown, {}, LeaderboardEntry, {}, import("mongoose").DefaultSchemaOptions> & LeaderboardEntry & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, LeaderboardEntry>;
//# sourceMappingURL=Leaderboard.d.ts.map