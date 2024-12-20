import { Request, Response } from "express";
import { User } from "../db/models/user.model";
import { hash } from "bcryptjs";
import { UserAttributes } from "../interfaces";

const createNewUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const passwordHash = await hash(password, 10);
    let newUser: UserAttributes = new User({
      name,
      email,
      password: passwordHash,
    });
    newUser = await newUser.save();

    if (!newUser) {
      return res.status(400).json({ message: "Failed to create new user" });
    }

    return res.status(201).json(newUser);
  } catch (error) {}
};

export {createNewUser}