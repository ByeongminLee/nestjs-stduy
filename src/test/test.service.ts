import { Injectable } from '@nestjs/common';
import { TestInterface } from './interface/test.interface';

@Injectable()
export class TestService {
  private readonly tests: TestInterface[] = [];

  create(test: TestInterface) {
    this.tests.push(test);
  }

  findAll(): TestInterface[] {
    return this.tests;
  }
}
