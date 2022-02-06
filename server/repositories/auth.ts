import httpStatus from 'http-status';
import Default from '../default';
import User, { IUserModel } from '../models/user';
import ApiError from '../utils/ApiError';
import { ITokenCollection, IUser } from '../interfaces';
import Token from '../models/token';
import { TokenTypes } from '../config/enums';

/**
 * Login with email and password
 *
 * @param body -This should be the request body.
 */
const loginWithEmailAndPassword = async (body: { email: string; password: string }): Promise<IUser> => {
     const user: IUserModel = await Default.getOne(User, { email: body.email }, { code: false });

     if (!user || !(await user.comparePassword(body.password))) throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');

     return user;
};

/**
 * Create reset token and save in token collection
 *
 * @param token - This should be the token from request query
 * @param password - This should be the password from request body
 */
const resetPassword = async (token: any, password: string) => {
     const resetTokenCollection: ITokenCollection = await Default.getOne(Token, { token });
     if (!resetTokenCollection) throw new ApiError(httpStatus.NOT_FOUND, "Token isn't valid");

     const user: IUserModel = await Default.getOne(User, { _id: resetTokenCollection.user });
     if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');

     Object.assign(user, { password });

     await user.save();

     await Token.deleteMany({ $and: [{ user: resetTokenCollection.user }, { type: TokenTypes.RESET_PASSWORD }] });
};

export default {
     loginWithEmailAndPassword,
     resetPassword,
};
