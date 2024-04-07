import express from "express";
import bodyParser from "body-parser";

import { connectToMongoDB } from "./shared/database.js";

const app = express();
app.use(bodyParser.json());

async function main() {
  await connectToMongoDB();

  app.listen(3000, () => {
    console.log("node app is running");
  });
}

main();
