import {
  createVacancyService,
  getVacanciesService,
  getVacancyByIdService,
  deleteVacancyService,
} from "./vacancy.service.js";

class VacancyController {
  async createvacancy(req, res) {
    try {
      const newVacancy = await createVacancyService(req.body, req.user.userId);
      res.status(201).json(newVacancy);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  async getVcancies(req, res) {
    try {
      const vacancies = await getVacanciesService(req.user);
      res.status(200).json(vacancies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getVacancyById(req, res) {
    try {
      const vacancy = await getVacancyByIdService(
        req.params.vacancyId,
        req.user
      );
      res.status(200).json(vacancy);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteVacancy(req, res) {
    try {
      const vacancy = await deleteVacancyService(
        req.params.vacancyId,
        req.user.userId
      );
      res.status(200).json(vacancy);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new VacancyController();
