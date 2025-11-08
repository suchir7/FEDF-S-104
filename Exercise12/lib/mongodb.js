import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) throw new Error("Please add MONGODB_URI to .env.local");

let client = global._mongoClient;
if (!client) {
  client = new MongoClient(uri, options);
  global._mongoClient = client;
}

const clientPromise = client.connect();
export default clientPromise;
