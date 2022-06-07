import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import getBlockNumberValue from './../caversTest/testCavers';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('Called when the second is 45');
  }

  @Cron('5 * * * * *')
  handleCron2() {
    this.logger.debug('2');
  }

  @Cron('3 * * * * *')
  handleCron1() {
    this.logger.debug('1');
  }

  @Interval(10000)
  handleInterval() {
    getBlockNumberValue();
    this.logger.debug('Called every 10 seconds');
  }

  @Interval(5000)
  handleIntervaltest() {
    this.logger.debug('test');
  }

  @Timeout(5000)
  handleTimeout() {
    this.logger.debug('Called once after 5 seconds');
  }
}
