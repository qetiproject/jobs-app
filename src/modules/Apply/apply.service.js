import Apply from "./apply.model.js";

export async function createApplyService(body) {
  const newApply = new Apply(body);
  await newApply.save();
  return newApply;
}
