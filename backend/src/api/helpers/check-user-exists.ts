import { User } from "../models/User";

export async function checkUserExists(email: String): Promise<Boolean> {
  const userExists = await User.findOne({ email: email });

  return userExists ? true : false;
}
