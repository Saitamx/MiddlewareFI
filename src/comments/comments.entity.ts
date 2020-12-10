import { Answers } from 'src/answers/answers.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  commentType: string;
  @Column({ length: 25 })
  title: string;
  @Column({ length: 25 })
  text: string;
  @Column({ length: 25 })
  onBehalfOf: string;
  @Column({ length: 25 })
  commentStatus: string;
  @Column({ length: 25 })
  createdBy: string;
  @Column({ length: 25 })
  created: string;
  @Column({ length: 25 })
  modifiedBy: string;
  @Column({ length: 25 })
  modified: string;
  @Column({ length: 25 })
  timeoutToSave: string;
  @OneToOne(() => Answers)
    @JoinColumn()
    answer: Answers;
}
