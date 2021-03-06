import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/users.entity';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAllInterval(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Delete(':id')
  remote(@Param('id') id: number) {
    this.usersService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: User) {
    this.usersService.update(id, user);
    return `update #${id}`;
  }
}
