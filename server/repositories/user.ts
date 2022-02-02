import { Request } from 'express';
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import Default from '../default';
import User, { IUserModel } from '../models/user';
import { sendWelcomeMail } from '../services/mailer';

const createUser = async (req: Request): Promise<any> => {
     const { body } = req;

     /** Check if user exists in database */
     const userExists: boolean = await Default.isExists(User, { email: body.email });
     if (userExists) throw new ApiError(httpStatus.FORBIDDEN, 'User already exists');

     body.code = Math.round(Math.random() * (9999 - 1000) + 1000);

     const user: IUserModel = await new User(body).save();

     const url: URL = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);

     /** Send welcome mail to new user email */
     await sendWelcomeMail(user, url);

     return user;
};

export default { createUser };
