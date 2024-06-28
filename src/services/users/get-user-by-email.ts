import userModel from '@modules/users/schema';
import { IUser } from '@modules/users/model';

export const getUserDetailsByEmail = async (email: string): Promise<IUser | null> => {
  const condition = {
    email: email,
  };
  const whereCond = { where: condition, raw: true };
  const userDetails = await userModel.findOne(whereCond);
  return userDetails;
};
