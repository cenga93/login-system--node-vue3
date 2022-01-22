import { Document, Model, model, Schema } from 'mongoose';
import { IUser } from '../interfaces';

export interface IUserModel extends IUser, Document {
     comparePassword(userPassword: string): Promise<boolean>;
     getPublicFields(): Promise<IUser>;
}

const UserSchema = new Schema(
     {
          firstName: {
               type: String,
               required: true,
          },
          lastName: {
               type: String,
               required: true,
          },
          password: {
               type: String,
               required: true,
          },
          email: {
               type: String,
               required: true,
               unique: true,
          },
          verified: {
               type: Boolean,
               default: false,
          },
          code: {
               type: String,
          },
     },
     {
          timestamps: true,
     }
);

const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);

export default User;
