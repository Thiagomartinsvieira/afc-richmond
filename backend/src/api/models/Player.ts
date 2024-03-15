import mongoose, { Schema } from 'mongoose';
import { IPlayer } from '../interfaces/IPlayer';

const playerSchema = new Schema<IPlayer>(
  {
    name: {
      type: String,
      required: true,
    },
    born_date: {
      type: Date,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      require: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    place_birth: {
      type: String,
      required: false,
    },
    profile_pic_url: {
      type: String,
      required: false,
      default: '',
    },
  },
  { timestamps: true }
);

export const Player = mongoose.model('Player', playerSchema);
