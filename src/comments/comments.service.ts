import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './comments.entity';
@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private commentRepository: Repository<Comments>,
  ) {}
  async getComments(): Promise<Comments[]> {
    return await this.commentRepository.find();
  }
  async uploadComments(comment: Comments) {
    this.commentRepository.save(comment);
  }
  async updateComments(comment: Comments) {
    this.commentRepository.update(comment.id, comment);
  }
  async deleteComments(comment: Comments) {
    try {
      this.commentRepository
        .delete(comment)
        .then(res => console.log('resss', res))
        .catch(err => console.log('errr', err));
    } catch (err) {
      console.log('err', err);
      return err;
    }
  }
}
