import { IMembershipPlans } from './IMembershipPlans';
import { IUserRoles } from './IUserRoles';

export interface IUser {
  _id: string;
  name: string;
  born_date: Date;
  password: string;
  email: string;
  membership?: IMembershipPlans;
  roles: IUserRoles[];
}
