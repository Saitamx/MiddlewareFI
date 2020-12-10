import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answers } from './answers.entity';
@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answers)
    private answersRepository: Repository<Answers>,
  ) {}
  async getAnswers(): Promise<Answers[]> {
    return await this.answersRepository.find();
  }
  async uploadAnswers(answer: Answers) {
    this.answersRepository.save(answer);
  }
  async updateAnswers(answer: Answers) {
    this.answersRepository.update(answer.id, answer);
  }
  async deleteAnswers(answer: Answers) {
    try {
      this.answersRepository
        .delete(answer)
        .then(res => console.log('resss', res))
        .catch(err => console.log('errr', err));
    } catch (err) {
      console.log('err', err);
      return err;
    }
  }
}
