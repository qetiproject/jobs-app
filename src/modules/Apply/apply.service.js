import Apply from "./apply.model.js";

export async function createApplyService(body, userId) {
  const newApply = new Apply({ ...body, user: userId });
  await newApply.save();
  return newApply;
}
