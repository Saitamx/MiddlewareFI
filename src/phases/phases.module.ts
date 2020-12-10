import { Module } from '@nestjs/common';
import { PhasesService } from './phases.service';
import { PhasesController } from './phases.controller';
import { Phases } from './phases.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Phases])],
  providers: [PhasesService],
  controllers: [PhasesController],
})
export class PhasesModule {}
