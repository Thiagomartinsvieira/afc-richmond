import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';
import { IUserRoles } from '../interfaces/IUserRoles';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    born_date: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    membership: {
      type: String,
      default: '',
    },
    roles: {
      type: [String],
      required: true,
      default: ['user'],
      validate: (value: Array<IUserRoles>) =>
        value.every((role) => ['user', 'admin'].includes(role)),
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
