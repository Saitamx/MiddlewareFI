import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Answers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  text: string;
  @Column({ length: 25 })
  answerType: string;
  @Column({ length: 25 })
  answerStatus: string;
  @Column({ length: 25 })
  createdBy: string;
  @Column({ length: 25 })
  created: string;
  @Column({ length: 25 })
  version: string;
  @Column({ length: 25 })
  modifiedBy: string;
  @Column({ length: 25 })
  modified: string;
}
