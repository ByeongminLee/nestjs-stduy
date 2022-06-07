import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/users.entity';
import { dataSource } from 'src/app.module';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @Interval(10000)
  findAllInterval(): Promise<User[]> {
    const tests = async () => {
      const test = await this.usersRepository.find();
      console.log('10초마다 전체 데이터 조회', test);
    };
    tests();

    return this.usersRepository.find();
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: any): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async create(user: User): Promise<void> {
    await this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async update(id: number, user: User): Promise<void> {
    await dataSource
      .createQueryBuilder()
      .update(User)
      .set({
        name: user.name,
        age: user.age,
      })
      .where('id = :id', { id })
      .execute();
  }
}
