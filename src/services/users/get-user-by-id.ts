import userModel from '@modules/users/schema';
import { IUser } from '@modules/users/model';

export const getUserDetailsById = async (id: string): Promise<IUser | null> => {
  const condition = {
    id: id,
  };
  const whereCond = { where: condition, raw: true };
  const userDetails = await userModel.findOne(whereCond);
  return userDetails;
};
