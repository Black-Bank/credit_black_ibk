import { ICreateUser } from './interfaces';
import * as SignupAPI from '../api/signup';

export class CreateUserService {
  public createUser = async (user: ICreateUser) => {
    const res = await SignupAPI.createUser(user);
    return res;
  };
}
