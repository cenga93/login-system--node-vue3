import { Model } from 'mongoose';
import { IFilter, ISelect, IUser } from '../interfaces';

const isExists = async (Collection: Model<any>, filter: IFilter): Promise<boolean> => {
     return await Collection.exists(filter);
};

const getAll = async (Collection: Model<any>, notAllowedFields?: ISelect): Promise<any[]> => {
     return Collection.find().select(notAllowedFields);
};

const getOne = async (Collection: any, filter: { _id: any }, notAllowedFields?: ISelect): Promise<any> => {
     return await Collection.findOne(filter).select(notAllowedFields);
};

const remove = async (Collection: any, filter: IFilter): Promise<any> => {
     return await Collection.findOneAndRemove(filter);
};

export default { getAll, getOne, remove, isExists };
