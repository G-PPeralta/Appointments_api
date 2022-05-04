const { User }  = require('../database/models');

class UserController {
  static async createUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({ username, email, password });
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  static async listUsers(_req, res) {
    try {
      const user = await User.findAll();
      if (!user) return res.status(404).json({ message: 'There is no user listed' });
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  static async findUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  static async editUser(req, res) {
    try {
      const { id } = req.params;
      const { username, email, password } = req.body;
      await User.update({
        username,
        email,
        password,
      }, {
        where: { id },
      });
      return res.status(200).json({ message: 'User updated' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await User.destroy({ where: { id } });
      return res.status(204).json({ message: 'User deleted' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = { UserController }