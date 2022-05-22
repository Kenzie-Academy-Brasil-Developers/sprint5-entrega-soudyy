import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.services";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;
    const created_at = new Date();
    const updated_at = new Date();
    const newUser = await userCreateService({
      name,
      email,
      password,
      age,
      created_at,
      updated_at,
    });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
export default userCreateController;
