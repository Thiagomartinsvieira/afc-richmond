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

  checkRequiredFields(fields: ICreateUserFields): string[] {
    const fieldsRequired: Array<keyof ICreateUserFields> = Object.keys(
      fields
    ) as Array<keyof ICreateUserFields>;
    const missingFields: string[] = [];

    for (const field of fieldsRequired) {
      if (!fields[field]) {
        missingFields.push(field);
      }
    }

    return missingFields;
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
