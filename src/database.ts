import { Db, MongoClient } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI || "";

let cachedDb: Db = null;

// console.log(6, process.env.MONGODB_URI);

export function getDatabase(): Promise<Db> {
  if (cachedDb) {
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(MONGODB_URI).then((client) => {
    cachedDb = client.db();
    return cachedDb;
  });
}
