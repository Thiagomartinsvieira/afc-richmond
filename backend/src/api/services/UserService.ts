import * as bcrypt from 'bcrypt';
import { User } from '../models/User';

export interface ICreateUserFields {
  name?: string;
  born_date?: Date;
  email?: string;
  password?: string;
  confirmpassword?: string;
}

class UserService {
  checkPasswordsMatch(password: string, confirmpassword: string): boolean {
    if (password !== confirmpassword) {
      return false;
    }
    return true;
  }

  async checkUserExists(email: string): Promise<boolean> {
    const userExists = await User.findOne({ email: email });

    return !!userExists;
  }

  async getUserByEmail(email: string) {
    const user = await User.findOne({ email: email });

    return user;
  }

  async checkPasswordCrypt(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    return !!passwordMatch;
  }

  async getUserById(id: string) {
    const user = await User.findById({ _id: id });

    return user;
  }
}

export default new UserService();
