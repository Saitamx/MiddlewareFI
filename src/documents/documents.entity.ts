import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Documents {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;
  @Column({ length: 25 })
  ezshareId: string;
  @Column({ length: 25 })
  type: string;
  @Column({ length: 25 })
  createdBy: string;
  @Column({ length: 25 })
  created: string;
  @Column({ length: 25 })
  version: string;
}
