import { createVacancyService } from "./vacancy.service.js";

class VacancyController {
  async createvacancy(req, res) {
    try {
      const newVacancy = await createVacancyService(req.body);
      res.status(201).json(newVacancy);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new VacancyController();
