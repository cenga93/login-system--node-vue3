import { Request, Response } from 'express';
import { catchAsync } from 'catch-async-express';
import httpStatus from 'http-status';
import userRepository from '../repositories/user';
import { IUser } from '../interfaces';

export const create = catchAsync(async (req: Request, res: Response): Promise<void> => {
     const newUser: IUser = await userRepository.createUser(req);

     res.status(httpStatus.OK).json(newUser);
});
