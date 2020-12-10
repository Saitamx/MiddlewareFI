import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Phases } from './phases.entity';
import { PhasesService } from './phases.service';

@Controller('phases')
export class PhasesController {
  constructor(private phaseService: PhasesService) {}
  @Get('')
  get() {
    return this.phaseService.getDocs();
  }
  @Post()
  createFile(@Body() phase: Phases) {
    this.phaseService.uploadDoc(phase);
  }
  @Put()
  update(@Body() phase: Phases) {
    this.phaseService.updateDoc(phase);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.phaseService.deletedoc(params.id).catch(err => {
      console.log('err', err);
      return err;
    });
  }
}
