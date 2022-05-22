import bcrypt from "bcrypt";
import { userRepository } from "../../repositories";

const userUpdateService = async (
  email: string,
  password: string,
  name: string,
  age: number,
  uuid: any
) => {
  const update_at = new Date();

  const user = await userRepository.update(uuid, {
    email: email,
    name: name,
    age: age,
    updated_at: update_at,
  });

  return user;
};

export default userUpdateService;
