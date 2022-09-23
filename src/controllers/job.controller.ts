import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import CreateJobDto from '../dto/create-job.dto';
import { JobService } from '../services/job.service';
import UpdateJobDto from '../dto/update-job.dto';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  // get all job
  @Get()
  getJobs() {
    return this.jobService.getAllJobs();
  }

  // get job by id
  @Get(':id')
  getJobById(@Param('id') id: string) {
    return this.jobService.getJobById(Number(id));
  }

  // create job
  @Post()
  async createJob(@Body() job: CreateJobDto) {
    return this.jobService.createJob(job);
  }

  // update job
  @Put(':id')
  async updateJob(@Param('id') id: string, @Body() job: UpdateJobDto) {
    return this.jobService.updateJob(Number(id), job);
  }

  //delete job
  @Delete(':id')
  async deleteJob(@Param('id') id: string) {
    this.jobService.deleteJob(Number(id));
  }

  //delete all
  @Delete()
  async deleteAllJobs() {
    this.jobService.deleteAllJobs();
  }
}