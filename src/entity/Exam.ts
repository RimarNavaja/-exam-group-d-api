import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ default: 60 })
  durationMinutes!: number;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;
}
