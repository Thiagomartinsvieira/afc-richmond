import { Request, Response } from 'express';
import { getToken } from '../helpers/get-token';
import { getUserByToken } from '../helpers/get-user-by-token';
import { IMembershipPlans } from '../interfaces/IMembershipPlans';
import { IUser } from '../interfaces/IUser';
import { User } from '../models/User';

class MembershipController {
  async add(req: Request, res: Response) {
    const token = getToken(req);
    const user = await getUserByToken(req, res, token);

    const typedUser = user as IUser;

    const membership = req.body.membership as IMembershipPlans;

    if (!membership) {
      return res
        .status(422)
        .json({ error: 'You need to send the membership field.' });
    }

    // HACK: I don't like this code
    if (
      !['platinum', 'diamond', 'gold', 'silver', 'bronze'].includes(membership)
    ) {
      return res
        .status(422)
        .json({ error: 'Get ready to learn chinese buddy' });
    }

    typedUser.membership = membership;

    try {
      await User.findOneAndUpdate(
        { _id: typedUser._id },
        { $set: typedUser },
        { new: true }
      );

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

export default new MembershipController();
