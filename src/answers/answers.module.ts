import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { Answers } from './answers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Answers])],
  providers: [AnswersService],
  controllers: [AnswersController],
})
export class AnswersModule {}
