import nodemailer from 'nodemailer';
import { env } from './env-config';

const email = env.EMAIL;
const pass = env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};

export function htmlTemplate(
  name: string,
  email: string,
  subject: string,
  message: string
): string {
  return `<h2 style="font-weight: bold;">Name</h2><p>${name}</p>
          <h2 style="font-weight: bold;">Email</h2><p>${email}</p>
          <h2 style="font-weight: bold;">Subject</h2><p>${subject}</p>
          <h2 style="font-weight: bold;">Message</h2><p>${message}</p>`;
}

export function textTemplate(
  name: string,
  email: string,
  subject: string,
  message: string
): string {
  return `${name}, ${email}, ${subject}, ${message}`;
}
