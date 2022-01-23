export interface IUser {
     firstName: string;
     lastName: string;
     email: string;
     password: string;
     code: string;
     verified: boolean;
}

export interface IFilter {
     email?: string;
}
