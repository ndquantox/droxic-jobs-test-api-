import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateJobDto from '../dto/create-job.dto';
import Job from '../entities/job.entity';
import { UpdateJobDto } from '../dto/update-job.dto';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job) private jobRepository: Repository<Job>,
  ) {}

  // find all
  getAllJobs() {
    return this.jobRepository.find();
  }

  // find by id
  async getJobById(id: number) {
    const job = await this.jobRepository.findOneBy({id: id})
    if (job) {
      return job;
    }

    throw new HttpException('Job not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createJob(job: CreateJobDto) {
    const newJob = await this.jobRepository.create(job);
    await this.jobRepository.save(newJob);

    return newJob;
  }

  // update
  async updateJob(id: number, post: UpdateJobDto) {
    await this.jobRepository.update(id, post);
    const updatedJob = await this.jobRepository.findOneBy({id: id})
    if (updatedJob) {
      return updatedJob;
    }

    throw new HttpException('Job not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteJob(id: number) {
    const deletedJob = await this.jobRepository.delete(id);
    if (!deletedJob.affected) {
      throw new HttpException('Job not found', HttpStatus.NOT_FOUND);
    }
  }
  
  // delete all
  async deleteAllJobs() {
    const jobs = await this.jobRepository.find();

    if (jobs.length) {
      for (const job of jobs) {
          await this.jobRepository.delete(job.id);
      }
    }
    return true;

  }
}