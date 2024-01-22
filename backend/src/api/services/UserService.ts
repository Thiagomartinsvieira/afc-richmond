import { User } from '../models/User';

interface ICreateUserFields {
  name: string;
  born_date: Date;
  email: string;
  password: string;
  confirmpassword: string;
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
}

export default new UserService();
