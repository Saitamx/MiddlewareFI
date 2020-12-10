import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Documents } from './documents/documents.entity';
import { Phases } from './phases/phases.entity';
import { DocumentsModule } from './documents/documents.module';
import { PhasesModule } from './phases/phases.module';
import { CommentsModule } from './comments/comments.module';
import { Comments } from './comments/comments.entity';
import { AnswersModule } from './answers/answers.module';
import { Answers } from './answers/answers.entity';

@Module({
  imports: [
    DocumentsModule,
    PhasesModule,
    CommentsModule,
    AnswersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'testingredux',
      entities: [Documents,Phases,Comments,Answers],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
