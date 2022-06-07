import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { TestModule } from './test/test.module';

// TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User/entity/users.entity';
import { UsersModule } from './User/users.module';
import { DataSource } from 'typeorm';

const mysqlConnectionConfig: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [User],
  // synchronize: true -> 개발 모드에서만 사용
  synchronize: true,
};

export const dataSource = new DataSource(mysqlConnectionConfig);

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlConnectionConfig),
    TestModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: 'test', method: RequestMethod.ALL },
        { path: 'user', method: RequestMethod.ALL },
      );
  }
}
