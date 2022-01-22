import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { FeedPostEntity } from 'src/entity/post.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) {}

  createPost(feedPost: FeedPost): Observable<FeedPost> {
    return from(this.feedPostRepository.save(feedPost));
  }
  getAllPosts(): Observable<FeedPost[]> {
    return from(this.feedPostRepository.find());
  }
  updatePost(id: string, feedPost: FeedPost): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, feedPost));
  }
  deletePost(id: string): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }
  getPost(id: string): Observable<FeedPost> {
    return from(this.feedPostRepository.findOne(id));
  }
}
