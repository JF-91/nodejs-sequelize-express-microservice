import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import User from "../models/user.model.mjs";

class UserController {
  static async createUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ where: { email } });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = await User.create({
        username,
        email,
        password: hashedPassword,
      });


      return res.status(201).json({ msg: "User created successfully", user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
    
    static async getAllUsers(req, res) {
        try {
        const users = await User.findAll();
        return res.status(200).json(users);
        } catch (error) {
        return res.status(500).json({ error: error.message });
        }
    }

    static async getUserById(req, res) {
        try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json(user);
        } catch (error) {
        return res.status(500).json({ error: error.message });
        }
    }
}

export default UserController;
