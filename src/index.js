import express from "express";
import bodyParser from "body-parser";

import { connectToMongoDB } from "./shared/database.js";
import { AuthRouter } from "./modules/Auth/auth.router.js";
import VacancyRouter from "./modules/Vacancy/vacancy.router.js";
import UserRouter from "./modules/User/user.router.js";
import ApplyRouter from "./modules/Apply/apply.model.js";

const app = express();
app.use(bodyParser.json());

async function main() {
  await connectToMongoDB();

  app.use("/api/auth", AuthRouter);
  app.use("/api/users", UserRouter);
  app.use("/api/vacancies", VacancyRouter);
  app.use("/api/vacancies", ApplyRouter);

  app.listen(3000, () => {
    console.log("node app is running");
  });
}

main();
