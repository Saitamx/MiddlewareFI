import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Documents } from './documents.entity';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(private docService: DocumentsService) {}
  @Get('')
  get() {
    return this.docService.getDocs();
  }
  @Post()
  createFile(@Body() doc: Documents) {
    this.docService.uploadDoc(doc);
  }
  @Put()
  update(@Body() doc: Documents) {
    this.docService.updateDoc(doc);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.docService.deletedoc(params.id).catch(err => {
      console.log('err', err);
      return err;
    });
  }
}
