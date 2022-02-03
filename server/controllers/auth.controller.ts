import { catchAsync } from 'catch-async-express';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import User, { IUserModel } from '../models/user';
import authRepository from '../repositories/auth';
import tokenRepository from '../repositories/token';
import { IToken, IUser } from '../interfaces';
import userRepository from '../repositories/user';
import ApiError from '../utils/ApiError';
import { sendResetPasswordMail } from '../services/mailer';

export const login = catchAsync(async (req: Request, res: Response): Promise<void> => {
     const { email, password } = req.body;
     const user: IUserModel | null = await authRepository.loginWithEmailAndPassword(email, password);

     if (!user.verified) throw new ApiError(httpStatus.UNAUTHORIZED, 'Email not verified. Check your email');

     const tokens: IToken = await tokenRepository.generateAuthTokens(user);

     res.status(httpStatus.OK).json({ ...user._doc, ...tokens });
});

export const register = catchAsync(async (req: Request, res: Response): Promise<void> => {
     const newUser: IUser = await userRepository.createUser(req);

     res.status(httpStatus.OK).json(newUser);
});

export const me = catchAsync(async (req: Request, res: Response): Promise<void> => {
     res.status(httpStatus.OK).json(req.user);
});

export const verify = catchAsync(async (req: Request, res: Response): Promise<void> => {
     const _id: string = req.params.verifyId;
     const code: string = req.body.code;

     const verifiedUser: IUserModel | null = await User.findOne({ _id, code });

     if (!verifiedUser) throw new ApiError(httpStatus.FORBIDDEN, 'User not found');
     if (verifiedUser.verified) throw new ApiError(httpStatus.FORBIDDEN, 'User is already verified');

     Object.assign(verifiedUser, { verified: true });

     await verifiedUser.save();

     res.status(httpStatus.OK).json(verifiedUser);
});

export const forgotPassword = catchAsync(async (req: Request, res: Response) => {
     const { email } = req.body;

     console.log(email);

     const resetPasswordToken = await tokenRepository.generateResetPasswordToken(email);

     const url: URL = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);



     await sendResetPasswordMail(email, url, resetPasswordToken);

     res.status(httpStatus.NO_CONTENT).json();
});
