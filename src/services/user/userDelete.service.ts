import { userRepository } from "../../repositories";

const userDeleteService = async (uuid: any) => {
  const user = await userRepository.delete(uuid);

  return true;
};

export default userDeleteService;
