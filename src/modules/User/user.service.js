import User from "./user.model.js";

export async function getCurrentUserService(userId) {
  const user = await User.findById(userId);
  user.password = undefined;
  return user;
}

export async function getUsersService(userId) {
  let users = await User.find();
  const user = await User.findById(userId);
  users = users.filter((item) => item.id != user.id);
  return users;
}

export async function getUserByIdService(userId) {
  const user = await User.findById(userId);
  user.password = undefined;
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

export async function deleteUserService(userId) {
  const user = await getUserByIdService(userId);
  if (user.role != "recruiter") {
    throw new Error(
      "You have permission to delete only user with recruiter role"
    );
  }
  await user.deleteOne();
  return user;
}
