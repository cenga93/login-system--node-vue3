import { IToken, IUser } from '../interfaces';
import setup from '../config/setup';
import config from '../config/setup';
import jwt from 'jsonwebtoken';
import { TokenTypes } from '../config/enums';
import { addDays, addMinutes, getUnixTime } from 'date-fns';
import Token from '../models/token';
import User, { IUserModel } from '../models/user';
import Default from '../default';
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';

/**
 * Generate token with jwt
 *
 * @param userId - This should be the id of user
 * @param expires - This should be the token expiration date
 * @param type - This should be the token expiration date
 */
export const generateToken = (userId: string, expires: number | Date, type: any): string => {
     const payload = {
          sub: userId,
          iat: getUnixTime(new Date()),
          exp: getUnixTime(expires),
          type,
     };
     return jwt.sign(payload, 'secret');
};

/**
 * Save token in database
 *
 * @param token - This should be the created token
 * @param userId - This should be the id of user
 * @param expires - This should be the token expiration date
 * @param type - This should be the token expiration date
 * @param blacklisted - This should be the boolean value
 */
const saveToken = async (token: string, userId: string, expires: Date, type: string, blacklisted: boolean = false): Promise<any> => {
     return await Token.create({ token, user: userId, expires, type, blacklisted });
};

/**
 * This function returns the access token and refresh token
 *
 * @param user - This should be the IUser
 * @return IToken - This should be the token object which contain token string and token expired date
 */
const generateAuthTokens = async (user: IUser): Promise<IToken> => {
     const { _id } = user;

     const accessTokenExpires: Date = addMinutes(new Date(), setup.jwt.accessExpirationMinutes);
     const accessToken: string = generateToken(_id, accessTokenExpires, TokenTypes.ACCESS);

     const refreshTokenExpires: Date = addDays(new Date(), setup.jwt.refreshExpirationDays);
     const refreshToken: string = generateToken(_id, refreshTokenExpires, TokenTypes.REFRESH);

     /** Save refresh token in database */
     await saveToken(refreshToken, _id, refreshTokenExpires, TokenTypes.REFRESH);

     return {
          // refresh: {},
          access: {
               token: accessToken,
               expires: accessTokenExpires,
          },
     };
};

/**
 * This function returns the refresh token for reset password
 *
 * @param email -This should be the user email
 */
const generateResetPasswordToken = async (email: string): Promise<string> => {
     const user: IUserModel = await Default.getOne(User, { email });
     if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');

     const expires: Date = addMinutes(new Date(), config.jwt.resetPasswordExpirationMinutes);
     const token: string = generateToken(user.id, expires, TokenTypes.RESET_PASSWORD);

     await saveToken(token, user.id, expires, TokenTypes.RESET_PASSWORD);

     return token;
};

export default {
     generateAuthTokens,
     generateResetPasswordToken,
};
