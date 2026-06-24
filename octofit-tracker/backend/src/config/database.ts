import mongoose from 'mongoose';

export const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

export const connectToDatabase = async (): Promise<typeof mongoose> => mongoose.connect(mongoUri);

export const disconnectFromDatabase = async (): Promise<void> => {
	await mongoose.disconnect();
};
