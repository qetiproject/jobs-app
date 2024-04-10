import express from "express";
import VacancyController from "./vacancy.controller.js";

const VacancyRouter = express.Router();

VacancyRouter.post("/create", VacancyController.createvacancy);

VacancyRouter.get("/", VacancyController.getVcancies);

VacancyRouter.get("/:vacancyId", VacancyController.getVacancyById);

VacancyRouter.delete("/:vacancyId", VacancyController.deleteVacancy);

export default VacancyRouter;
