import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { Documents } from './documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Documents])],
  providers: [DocumentsService],
  controllers: [DocumentsController],
})
export class DocumentsModule {}
