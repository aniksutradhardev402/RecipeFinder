
import dotenv from 'dotenv';

dotenv.config();
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        deprecationErrors: true,
      }
    });
let db;
    async function run() {
        try {
          // Connect the client to the server	(optional starting in v4.7)
          await client.connect();
          // Send a ping to confirm a successful connection
          db = client.db('recipes'); // Use the default database specified in the URI
    console.log('✅ MongoDB connected using native driver');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}

export const connectDB = async () => {
  if (!db) {
    await run();
  } else {
    console.log('✅ MongoDB already connected using native driver');
  }
};
export const getDB = () => db;