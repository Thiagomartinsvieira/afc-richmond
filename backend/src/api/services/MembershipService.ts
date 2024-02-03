import { IUser } from '../interfaces/IUser';

class UserService {
  checkUserHasMembershipPlan(user: IUser): boolean {
    if (user.membership === '') {
      return false;
    }
    return true;
  }
}

export default new UserService();
