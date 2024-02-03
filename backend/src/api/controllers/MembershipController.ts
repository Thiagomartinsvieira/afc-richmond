import { Request, Response } from 'express';
import { getToken } from '../helpers/get-token';
import { getUserByToken } from '../helpers/get-user-by-token';
import { IMembershipPlans } from '../interfaces/IMembershipPlans';
import { IUser } from '../interfaces/IUser';
import { User } from '../models/User';
import MembershipService from '../services/MembershipService';

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
        .json({ error: 'Invalid membership plan' });
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

  async remove(req: Request, res: Response) {
    const token = getToken(req);

    const user = await getUserByToken(req, res, token);

    const typedUser = user as IUser;

    if (!MembershipService.checkUserHasMembershipPlan(typedUser)) {
      return res
        .status(422)
        .json({ error: 'The user already does not have a membership plan' });
    }

    typedUser.membership = '';

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

  async edit(req: Request, res: Response) {
    const token = getToken(req)

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
        .json({ error: 'Invalid membership plan' });
    }

    if (typedUser.membership === '') {
      return res.status(422).json({ error: 'User does not have a membership plan' })
    }

    if (membership === typedUser.membership) {
      return res.status(422).json({ error: 'User already has this membership plan' })
    }

    typedUser.membership = membership

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

  async list(_req: Request, res: Response) {
    const users = await User.find({}, 'name born_date email membership')

    if (!users[0]) {
      return res.status(422).json({ error: 'There is no users registered in the system' })
    }

    return res.status(200).json({ message: users })
  }

  async associates(_req: Request, res: Response) {
    const associates = await User.find({ membership: { $ne: '' } }, 'name born_date email membership')

    if (!associates[0]) {
      return res.status(422).json({ error: 'There is no users with an active membership plan' })
    }

    return res.status(200).json({ message: associates })
  }
}

export default new MembershipController();
