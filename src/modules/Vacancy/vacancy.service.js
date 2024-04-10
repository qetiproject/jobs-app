import Vacancy from "./vacancy.model.js";

export async function createVacancyService(body) {
  const newVacany = new Vacancy(body);
  await newVacany.save();
  return newVacany;
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

export async function deleteVacancyService(vacancyId) {
  const vacancy = await getVacancyByIdService(vacancyId);
  await vacancy.deleteOne();
  return vacancy;
}
