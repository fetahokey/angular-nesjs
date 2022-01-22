import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('feed_post')
export class FeedPostEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ default: '' })
  body: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;
}
