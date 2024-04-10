import express from "express";
import VacancyController from "./vacancy.controller.js";
import { checkAuth, checkRole } from "../../middlewares/auth.middleware.js";

const VacancyRouter = express.Router();

VacancyRouter.post(
  "/create",
  checkAuth,
  checkRole(["recruiter"]),
  VacancyController.createvacancy
);

VacancyRouter.get("/", VacancyController.getVcancies);

VacancyRouter.get("/:vacancyId", VacancyController.getVacancyById);

VacancyRouter.delete(
  "/:vacancyId",
  checkAuth,
  checkRole(["recruiter"]),
  VacancyController.deleteVacancy
);

export default VacancyRouter;
