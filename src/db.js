import { MongoClient } from "mongodb";

let db;
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.f81xznv.mongodb.net/?retryWrites=true&w=majority`;

const connectToDb = async (cb) => {
  const client = new MongoClient(uri);
  await client.connect();
  db = client.db("react-blog-db");
  cb();
};

export { db, connectToDb };
