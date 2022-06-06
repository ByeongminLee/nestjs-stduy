import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TestInterface } from './interface/test.interface';
import { TestService } from './test.service';
import { CreateTestDto, PutTestDto } from './testDto';

@Controller('test')
export class TestController {
  // private : 선언과 초기화가 동시에 이루어짐
  constructor(private testsService: TestService) {}

  @Get()
  findAll(): TestInterface[] {
    return this.testsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `test param :id ${id}`;
  }

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testsService.create(createTestDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() putTestDto: PutTestDto) {
    return `put test ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `delete test ${id}`;
  }
}
