import { User } from '../models/User';

export async function checkUserExists(email: string): Promise<boolean> {
  const userExists = await User.findOne({ email: email });

  return userExists ? true : false;
}
