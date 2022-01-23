import { Model } from 'mongoose';
import { IFilter } from '../interfaces';

const isExists = async (Collection: Model<any>, filter: IFilter): Promise<boolean> => {
     return await Collection.exists(filter);
};

export default { isExists };
