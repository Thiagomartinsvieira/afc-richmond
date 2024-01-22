import { genSaltSync, hashSync } from 'bcrypt';
import { Request, Response } from 'express';
import { createUserToken } from '../helpers/create-user-token';
import { User } from '../models/User';
import UserService from '../services/UserService';

class UserController {
  async create(req: Request, res: Response): Promise<void> {
    const { name, born_date, email, password, confirmpassword } = req.body;

    const missingFields = UserService.checkRequiredFields({
      name,
      born_date,
      email,
      password,
      confirmpassword,
    });

    if (missingFields.length > 0) {
      res.status(422).json({
        error: `The following fields are required: ${missingFields.join(
          ', '
        )}.`,
      });
      return;
    }

    const passwordsMatch = UserService.checkPasswordsMatch(
      password,
      confirmpassword
    );

    if (!passwordsMatch) {
      res.status(422).json({
        error: 'The password and the confirmation must be the same',
      });
      return;
    }

    const userExists = await UserService.checkUserExists(email);

    if (userExists) {
      res.status(422).json({
        error:
          'There is already a registered user with this email, please use another email.',
      });
      return;
    }

    const salt = genSaltSync(12);
    const hashPassword = hashSync(password, salt);

    const user = new User({
      name,
      born_date,
      email,
      password: hashPassword,
    });

    try {
      const newUser = await user.save();

      createUserToken(req, res, newUser);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

export default new UserController();
