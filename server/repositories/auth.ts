import httpStatus from 'http-status';
import Default from '../default';
import User, { IUserModel } from '../models/user';
import ApiError from '../utils/ApiError';
import { IFilter, ISelect, IUser } from '../interfaces';
import tokenRepository from './token';
import Token from '../models/token';
import { TokenTypes } from '../config/enums';
import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const loginWithEmailAndPassword = async (email: string, userPassword: string): Promise<IUserModel> => {
     const filter: IFilter = { email };
     const notAllowedFields: ISelect = { code: false };
     const user: IUserModel = await Default.getOne(User, filter, notAllowedFields);

     if (!user || !(await user.comparePassword(userPassword))) {
          throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
     }

     return user;
};

const resetPassword = async (token: any, password: string) => {
     try {
          const resetTokenObject = await Default.getOne(Token, { token });
          if (!resetTokenObject) throw new ApiError(httpStatus.NOT_FOUND, "Token isn't valid");

          const user = await Default.getOne(User, { _id: resetTokenObject.user });
          if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');

          Object.assign(user, { password });
          await user.save();

          await Token.deleteMany({ $and: [{ user: resetTokenObject.user }, { type: 'resetPassword' }] });
     } catch (error) {
          throw new ApiError(httpStatus.UNAUTHORIZED, 'Password reset failed');
     }
};

export default {
     loginWithEmailAndPassword,
     resetPassword,
};
