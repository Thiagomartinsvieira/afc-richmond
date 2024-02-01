import { genSaltSync, hashSync } from 'bcrypt';
import { Request, Response } from 'express';
import { createUserToken } from '../helpers/create-user-token';
import { getToken } from '../helpers/get-token';
import { getUserByToken } from '../helpers/get-user-by-token';
import { IUser } from '../interfaces/IUser';
import { User } from '../models/User';
import UserService from '../services/UserService';

class UserController {
  async register(req: Request, res: Response): Promise<void> {
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

    const userExists = await UserService.checkUserExists(email);

    if (userExists) {
      res.status(422).json({
        error:
          'There is already a registered user with this email, please use another email.',
      });
      return;
    }

    if (!passwordsMatch) {
      res.status(422).json({
        error: 'The password and the confirmation must be the same',
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

      await createUserToken(req, res, newUser);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    const missingFields = UserService.checkRequiredFields({
      email,
      password,
    });

    if (missingFields.length > 0) {
      res.status(422).json({
        error: `The following fields are required: ${missingFields.join(
          ', '
        )}.`,
      });
      return;
    }

    const user = await UserService.getUserByEmail(email);

    if (!user) {
      res.status(422).json({
        error: 'There is no registered user with this email',
      });
      return;
    }

    const checkPassword = await UserService.checkPasswordCrypt(
      password,
      user.password
    );

    if (!checkPassword) {
      res.status(422).json({ err: 'Invalid password' });
      return;
    }

    await createUserToken(req, res, user);
  }

  async getUserInfo(req: Request, res: Response) {
    const id = req.params.id;

    const user = await UserService.getUserById(id);

    if (!user) {
      return res.status(422).json({ err: 'User not found' });
    }

    res.status(200).json({ message: user });
  }

  async editUser(req: Request, res: Response) {
    const token = getToken(req);
    const user = await getUserByToken(req, res, token);

    const { name, born_date, email, password, confirmpassword } = req.body;

    // Without this TypeScript complains
    const typedUser = user as IUser;

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

    typedUser.name = name;
    typedUser.born_date = born_date;
    typedUser.email = email;
    typedUser.name = name;

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

    if (password !== null) {
      const salt = genSaltSync(12);
      const hashPassword = hashSync(password, salt);

      typedUser.password = hashPassword;
    }

    try {
      const updateduser = await User.findOneAndUpdate(
        { _id: typedUser._id },
        { $set: typedUser },
        { new: true }
      );
      res.json({
        message: 'usuário atualizado com sucesso!',
        data: updateduser,
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = getToken(req);

    const user = await getUserByToken(req, res, token);

    const typedUser = user as IUser;

    const missingFields = UserService.checkRequiredFields({
      email,
      password,
    });

    if (missingFields.length > 0) {
      res.status(422).json({
        error: `The following fields are required: ${missingFields.join(
          ', '
        )}.`,
      });
      return;
    }

    const userExists = await UserService.checkUserExists(email);

    if (!userExists) {
      res.status(422).json({
        error: 'There is no user registered with this email',
      });
      return;
    }

    const checkPassword = await UserService.checkPasswordCrypt(
      password,
      typedUser.password
    );

    if (!checkPassword) {
      res.status(422).json({ err: 'Invalid password' });
      return;
    }

    const id = req.params.id;

    await User.findOneAndDelete({ _id: id });

    res.status(200).json({ message: 'User removed successfully' });
  }
}
export default new UserController();
