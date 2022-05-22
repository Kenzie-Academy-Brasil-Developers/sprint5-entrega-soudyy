import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { userRepository } from "../repositories";

export const authUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const uuid = req.params;
    const user = await userRepository.retrieve(uuid);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid id" });
  }
};
