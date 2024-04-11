import Vacancy from "./vacancy.model.js";

export async function createVacancyService(body, userId) {
  const vacancy = new Vacancy({ ...body, recruiter: userId });
  await vacancy.save();
  return vacancy;
}

export async function getVacanciesService() {
  const vacancies = await Vacancy.find();
  return vacancies;
}

export async function getVacancyByIdService(vacancyId) {
  const vacancy = await Vacancy.findById(vacancyId);
  if (!vacancy) {
    throw new Error("Vacancy not found");
  }
  return vacancy;
}

export async function deleteVacancyService(vacancyId, userId) {
  const vacancy = await Vacancy.findOne({
    _id: { $eq: vacancyId },
    recruiter: { $eq: userId },
  });

  if (!vacancy) {
    throw new Error("Vacancy not found");
  }

  await vacancy.deleteOne();
  return vacancy;
}
