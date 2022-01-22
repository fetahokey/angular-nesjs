import { ObjectID } from 'typeorm';

export interface FeedPost {
  id?: ObjectID;
  body?: string;
  createdAt?: Date;
}
