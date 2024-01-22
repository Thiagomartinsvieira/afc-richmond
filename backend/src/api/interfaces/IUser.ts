import { IMembershipPlans } from './IMembershipPlans';

export interface IUser {
  _id: string;
  name: string;
  born_date: Date;
  password: string;
  email: string;
  membership_plan?: IMembershipPlans;
}
