import passportJwt from 'passport-jwt';
import User from '../models/user';
import { TokenTypes } from './enums';
import { IUser } from '../interfaces';
const { Strategy: JwtStrategy, ExtractJwt } = passportJwt;

export const jwtOptions = {
     secretOrKey: 'secret',
     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload: { type: string; sub: any; exp: number }, done: (arg0: any, arg1: IUser | boolean) => void) => {
     try {
          if (payload.type !== TokenTypes.ACCESS) throw new Error('Invalid token type');

          const user = await User.findById(payload.sub);

          const courrentDate = Date.now();
          const expiration = payload.exp * 1000;

          if (courrentDate > expiration) {
               return done(null, false);
          }

          if (!user) return done(null, false);

          done(null, user);
     } catch (error) {
          done(error, false);
     }
};

export const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
