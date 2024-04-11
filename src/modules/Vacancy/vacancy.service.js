import Vacancy from "./vacancy.model.js";

export async function createVacancyService(body, userId) {
  const vacancy = new Vacancy({ ...body, recruiter: userId });
  await vacancy.save();
  return vacancy;
}

export async function getVacanciesService(user) {
  let vacancies;
  if (user.role === "recruiter") {
    vacancies = await Vacancy.findOne({
      recruiter: { $eq: user.userId },
    });
  } else {
    vacancies = await Vacancy.find();
  }

  if (!vacancies) {
    throw new Error("Vacancy not found");
  }

  return vacancies;
}

export async function getVacancyByIdService(vacancyId, user) {
  let vacancy;
  if (user.role === "recruiter") {
    vacancy = await Vacancy.findOne({
      _id: { $eq: vacancyId },
      recruiter: { $eq: user.userId },
    });
  } else {
    vacancy = await Vacancy.findById(vacancyId);
  }
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
