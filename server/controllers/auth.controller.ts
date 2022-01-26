import { catchAsync } from 'catch-async-express';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { IUserModel } from '../models/user';
import authRepository from '../repositories/auth';
import tokenRepository from '../repositories/token';
import { IToken } from '../interfaces';

export const login = catchAsync(async (req: Request, res: Response): Promise<void> => {
     const { email, password } = req.body;
     const user: IUserModel | null = await authRepository.loginWithEmailAndPassword(email, password);
     const tokens: IToken = await tokenRepository.generateAuthTokens(user);

     res.status(httpStatus.OK).json({ ...user._doc, ...tokens });
});
