import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Documents } from './documents.entity';
@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Documents)
    private docRepository: Repository<Documents>,
  ) {}
  async getDocs(): Promise<Documents[]> {
    return await this.docRepository.find();
  }
  async uploadDoc(doc: Documents) {
    this.docRepository.save(doc);
  }
  async updateDoc(doc: Documents) {
    this.docRepository.update(doc.id, doc);
  }
  async deletedoc(doc: Documents) {
    try {
      this.docRepository
        .delete(doc)
        .then(res => console.log('resss', res))
        .catch(err => console.log('errr', err));
    } catch (err) {
      console.log('err', err);
      return err;
    }
  }
}
