import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Job {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public position: string;

  @Column()
  public company: string;

  @Column()
  public description: string;

}

export default Job;