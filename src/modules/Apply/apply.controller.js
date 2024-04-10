import { createApplyService } from "./apply.service.js";

class ApplyController {
  async createApply(req, res) {
    try {
      const applyVacancy = await createApplyService(req.body);
      res.status(201).json(applyVacancy);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new ApplyController();
