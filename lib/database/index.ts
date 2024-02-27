// cache db connection across multiple invocations off serverless api routes
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// if we don't already have a connection, create an object with conn and promise set to null
// this instance refers to the global mongoose rather than the one that is being imported
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: 'caymac-events',
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
