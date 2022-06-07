import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';

// TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from './entity/tests.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestEntity])],
  exports: [TypeOrmModule],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
