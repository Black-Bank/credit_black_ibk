import { ICreateUser } from './user.interface';
import * as SignupAPI from '../api/signup';

export class CreateUserService {
  public createUser = async (user: ICreateUser) => {
    const res = await SignupAPI.createUser(user);
    return res;
  };
}
