import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Phases {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  date: string;
  @Column({ length: 155 })
  description: string;
  @Column({ length: 25 })
  reason: string;
  @Column({ length: 155 })
  phaseId: string;
  @Column({ length: 25 })
  stepCode: string;
  @Column({ length: 155 })
  stepId: string;
  @Column({ length: 25 })
  user: string;
}
