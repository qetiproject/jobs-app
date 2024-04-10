import User from "./user.model.js";

export async function getUsersService() {
  const users = await User.find();
  return users;
}

export async function getUserByIdService(userId) {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

export async function deleteUserService(userId) {
  const user = await getUserByIdService(userId);
  await user.deleteOne();
  return user;
}
