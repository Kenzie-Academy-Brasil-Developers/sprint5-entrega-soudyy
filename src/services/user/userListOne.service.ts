import { userRepository } from "../../repositories";

const userListOneService = async (uuid: any) => {
  const user = await userRepository.retrieve(uuid);

  return user;
};

export default userListOneService;
