import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Answers } from './answers.entity';
import { AnswersService } from './answers.service';

@Controller('answers')
export class AnswersController {
  constructor(private answerService: AnswersService) {}
  @Get('')
  get() {
    return this.answerService.getAnswers();
  }
  @Post()
  createFile(@Body() answer: Answers) {
    this.answerService.uploadAnswers(answer);
  }
  @Put()
  update(@Body() answer: Answers) {
    this.answerService.updateAnswers(answer);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.answerService.deleteAnswers(params.id).catch(err => {
      console.log('err', err);
      return err;
    });
  }
}
