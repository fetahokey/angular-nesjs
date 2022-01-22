import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  create(@Body() post: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(post);
  }
  @Get()
  getAll(): Observable<FeedPost[]> {
    return this.feedService.getAllPosts();
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() post: FeedPost,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(id, post);
  }
  @Delete(':id')
  delete(@Param('id') id: string): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
  @Get(':id')
  get(@Param('id') id: string): Observable<FeedPost> {
    return this.feedService.getPost(id);
  }
}
