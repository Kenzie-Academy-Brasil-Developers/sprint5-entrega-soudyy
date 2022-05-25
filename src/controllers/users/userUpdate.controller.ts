import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const uuid = req.params;

    const { name, email, password, age } = req.body;

    const user = await userUpdateService(name, email, password, age, uuid);

    return res.status(201).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;
