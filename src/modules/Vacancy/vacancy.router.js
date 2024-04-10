import express from "express";
import VacancyController from "./vacancy.controller.js";

const VacancyRouter = express.Router();

VacancyRouter.post("/create", VacancyController.createvacancy);
export default VacancyRouter;
