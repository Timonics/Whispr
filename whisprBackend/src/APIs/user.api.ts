import { Request, Response } from "express";
import { User } from "../db/models/user.model";
import { hash, compare } from "bcryptjs";
import { UserAttributes, UserAuthRequest } from "../interfaces";
import { clearToken, generateToken } from "../lib/utils.lib";

const createNewUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, avatar } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    const passwordHash = await hash(password, 10);
    let newUser: UserAttributes = new User({
      name,
      email,
      password: passwordHash,
      avatar,
    });

    generateToken(newUser.id, res);
    const savedUser = await newUser.save();

    if (!savedUser) {
      res.status(400).json({ message: "Failed to create new user" });
      return;
    }

    res.status(201).json({
      _id: newUser.id,
      name,
      email,
      avatar,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUserProfile = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as UserAuthRequest).user;
    const profile = await User.findById(userId);
    if (!profile) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json({
      _id: profile.id,
      name: profile.name,
      email: profile.email,
      avatar: profile.avatar,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (!userExists) {
      res.status(400).json({ message: "User does not exists" });
      return;
    }

    const isValidPassword = await compare(password, userExists.password);
    if (!isValidPassword) {
      res.status(400).json({ message: "Password is not correct" });
      return;
    }

    //generate token and store to cookie
    generateToken(userExists.id, res);

    const user = {
      _id: userExists._id,
      name: userExists.name,
      email: userExists.email,
      avatar: userExists.avatar,
    };

    res.status(200).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userID = (req as UserAuthRequest).user;
    const { name, email, avatar } = req.body;
    const userExists = await User.findById(userID);
    if (!userExists) {
      res.status(400).json({ message: "User does not exists" });
      return;
    }
    const updateUser = await User.findByIdAndUpdate(
      userID,
      { name, email, avatar },
      { new: true }
    );
    if (!updateUser) {
      res.status(400).json({ message: "User details is not updated" });
    }
    res.status(200).json({ message: "User details updated successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateUserPassword = async (req: Request, res: Response) => {
  try {
    const userID = (req as UserAuthRequest).user;
    const { oldPassword, newPassword } = req.body;
    const userExists = await User.findById(userID);
    if (!userExists) {
      res.status(400).json({ message: "User does not exists" });
      return;
    }
    const isValidPassword = await compare(oldPassword, userExists.password);
    if (!isValidPassword) {
      res.status(400).json({ message: "Old password is not correct" });
      return;
    }
    //update password
    const newPasswordHash = await hash(newPassword, 10);

    const updatePassword = await User.findByIdAndUpdate(
      userID,
      { password: newPasswordHash },
      { new: true }
    );
    if (!updatePassword) {
      res.status(400).json({ message: "Password is not updated" });
    }
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    const isloggedOut = clearToken(res);
    if (!isloggedOut) {
      res.status(400).json({ message: "Failed to logout" });
    }
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteAccount = async (req: Request, res: Response) => {
  try {
    const userId = (req as UserAuthRequest).user;
    const deleteAccount = await User.findByIdAndDelete(userId);
    if (!deleteAccount) {
      res.status(400).json({ message: "Failed to delete account" });
      return;
    }
    clearToken(res);
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const checkAuthenticated = async (req: Request, res: Response) => {
  try {
    const isAuth = (req as UserAuthRequest).user;
    if (!isAuth) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    res.status(200).json({ message: "Authenticated" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export {
  createNewUser,
  getUserProfile,
  login,
  updateUser,
  updateUserPassword,
  logout,
  getProfile,
  deleteAccount,
  checkAuthenticated,
};
