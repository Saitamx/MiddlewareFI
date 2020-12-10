import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Comments } from './comments.entity';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}
  @Get('')
  get() {
    return this.commentsService.getComments();
  }
  @Post()
  createFile(@Body() comment: Comments) {
    this.commentsService.uploadComments(comment);
  }
  @Put()
  update(@Body() comment: Comments) {
    this.commentsService.updateComments(comment);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.commentsService.deleteComments(params.id).catch(err => {
      console.log('err', err);
      return err;
    });
  }
}
