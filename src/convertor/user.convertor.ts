import { IUserDB } from '../models/user.model';
import { User } from '../types/user.type';

const convertor = (user: IUserDB): User => {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

export default convertor;