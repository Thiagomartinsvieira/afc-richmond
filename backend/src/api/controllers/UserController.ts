import {
  passwordsMatch,
  validateRequiredFields,
} from "../validations/userValidations";
import { Response, Request } from "express";
import { genSaltSync, hashSync } from "bcrypt";
import { User } from "../models/User";
import { checkUserExists } from "../helpers/check-user-exists";

export default class UserController {
  static async create(req: Request, res: Response) {
    const { name, born_date, email, password, confirmpassword } = req.body;
    const requiredFields = [
      "name",
      "born_date",
      "email",
      "password",
      "confirmpassword",
    ];

    validateRequiredFields(req, res, requiredFields);
    passwordsMatch(req, res, password, confirmpassword);
    const userExists = await checkUserExists(email);

    if (userExists) {
      res.status(422).json({
        error:
          "There is already a registered user with this email, please use another email.",
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
      res.status(201).json({ msg: newUser });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
