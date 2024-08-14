import { MongoClient } from "mongodb";

async function connectToDatabase() {
  const connectionString = `${process.env.mongodb_url}${process.env.mongodb_user}${process.env.mongodb_pass}${process.env.mongodb_domain}/${process.env.mongodb_database}?${process.env.mongodb_query_string}`;
  const client = new MongoClient(
    // "mongodb://media.hydeinnovations.com:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1"
    connectionString
    // "mongodb://db.hydeug.com:27017/h-streamer?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1"
    // "mongodb+srv://hyde:An0ther12@hyde.9vshdl0.mongodb.net/h-streamer?retryWrites=true&w=majority"
  );
  return client;
}

export default connectToDatabase;
