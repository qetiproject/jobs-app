import Vacancy from "./vacancy.model.js";

export async function createVacancyService(body) {
  const newVacany = new Vacancy(body);
  await newVacany.save();
  return newVacany;
}
