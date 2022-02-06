import { ObjectId } from 'mongoose';

export interface IUser {
     _id?: any;
     firstname: string;
     lastname: string;
     email: string;
     password: string;
     code: string;
     verified: boolean;
     _doc?: Object;
     role: string;
}

export interface ISelect {
     _id?: number;
     code?: boolean;
     name?: number;
}

export interface IFilter {
     _id?: ObjectId;
     email?: string;
     id?: any;
     token?: string;
}

export interface IToken {
     access: {
          token?: string;
          expires?: Date;
     };
     // refresh: {
     //      token?: string;
     //      expires?: Date;
     // };
}

export interface ITokenCollection {
     token: string;
     user: ObjectId;
     type: 'refresh' | 'resetPassword';
     expires: Date;
     blackListed: boolean;
}
