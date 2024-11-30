import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../../config';

export default async (): Promise<Db> => {
  try {
    mongoose.set('strictQuery', true);
    const connection = await mongoose.connect(config.databaseURL);
    return connection.connection.db;
  } catch (err) {
    throw new Error(`Database connection error: ${err}`)
  }
};
