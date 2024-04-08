import express from "express";
import bodyParser from "body-parser";

import { connectToMongoDB } from "./shared/database.js";
import { AuthRouter } from "./modules/Auth/auth.router.js";

const app = express();
app.use(bodyParser.json());

async function main() {
  await connectToMongoDB();

  app.use("/api/auth", AuthRouter);

  app.listen(3000, () => {
    console.log("node app is running");
  });
}

main();
