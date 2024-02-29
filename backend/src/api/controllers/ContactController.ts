import { Request, Response } from 'express';
import z from 'zod';
import {
  htmlTemplate,
  mailOptions,
  textTemplate,
  transporter,
} from '../../config/nodemailer';
import { checkRequiredFields } from '../helpers/check-required-fields';
import { isEmail } from '../helpers/is-email';

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string().min(1).max(64),
  message: z.string(),
});

class UserController {
  async getContact(req: Request, res: Response) {
    const data = req.body;

    try {
      contactSchema.parse(data);
    } catch (error) {
      res.status(422).json({ error: error });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: textTemplate(data.name, data.email, data.subject, data.message),
        html: htmlTemplate(data.name, data.email, data.subject, data.message),
      });

      return res.status(400).end();
    } catch (error) {
      console.error(error);
    }
  }
}

export default new UserController();
