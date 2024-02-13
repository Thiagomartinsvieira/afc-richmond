import { Request, Response } from 'express';
import {
  htmlTemplate,
  mailOptions,
  textTemplate,
  transporter,
} from '../../config/nodemailer';
import { isEmail } from '../helpers/is-email';
import ContactService from '../services/ContactService';

class UserController {
  async getContact(req: Request, res: Response) {
    const { name, email, subject, message } = req.body;

    const missingFields = ContactService.checkRequiredFields({
      name,
      email,
      subject,
      message,
    });

    if (missingFields.length > 0) {
      res.status(422).json({
        error: `The following fields are required: ${missingFields.join(
          ', '
        )}.`,
      });
      return;
    }

    if (!isEmail(email)) {
      return res.status(422).json({ error: 'Invalid email' });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: subject,
        text: textTemplate(name, email, subject, message),
        html: htmlTemplate(name, email, subject, message),
      });

      return res.status(400).end();
    } catch (error) {
      console.error(error);
    }
  }
}

export default new UserController();
