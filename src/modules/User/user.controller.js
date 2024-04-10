import {
  getUsersService,
  getUserByIdService,
  deleteUserService,
  getCurrentUserService,
} from "./user.service.js";

class UserController {
  async getCurrentUser(req, res) {
    try {
      const user = await getCurrentUserService(req.user.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getUsers(req, res) {
    try {
      const users = await getUsersService(req.user.userId);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getUserById(req, res) {
    try {
      const user = await getUserByIdService(req.params.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async deleteUser(req, res) {
    try {
      const user = await deleteUserService(req.params.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
export default new UserController();
