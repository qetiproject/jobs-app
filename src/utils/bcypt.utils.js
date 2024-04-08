import bcypt from "bcrypt";

export async function hashPassword(password) {
  const hashedPassword = await bcypt.hash(password, 10);
  return hashedPassword;
}

export async function comparePasswords(password, hashedPassword) {
  const isMatch = await bcypt.compare(password, hashedPassword);
  return isMatch;
}
