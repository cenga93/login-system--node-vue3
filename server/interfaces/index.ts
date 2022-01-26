export interface IUser {
     _id?: any;
     firstName: string;
     lastName: string;
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
     email?: string;
}

export interface IToken {
     access: {
          token?: string;
          expires?: Date;
     };
     refresh: {
          token?: string;
          expires?: Date;
     };
}
