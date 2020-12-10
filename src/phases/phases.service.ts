import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Phases } from './phases.entity';
@Injectable()
export class PhasesService {
  constructor(
    @InjectRepository(Phases)
    private phaseRepository: Repository<Phases>,
  ) {}
  async getDocs(): Promise<Phases[]> {
    return await this.phaseRepository.find();
  }
  async uploadDoc(phase: Phases) {
    this.phaseRepository.save(phase);
  }
  async updateDoc(phase: Phases) {
    this.phaseRepository.update(phase.id, phase);
  }
  async deletedoc(phase: Phases) {
    try {
      this.phaseRepository
        .delete(phase)
        .then(res => console.log('resss', res))
        .catch(err => console.log('errr', err));
    } catch (err) {
      console.log('err', err);
      return err;
    }
  }
}
