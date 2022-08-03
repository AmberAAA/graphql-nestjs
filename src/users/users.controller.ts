import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { PageQuery } from 'src/global.type';
import { ParseInitFromAnyPipe } from 'src/share/pipe/parseInitFormObjectPipe';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/page')
  findAllByPage(@Query(ParseInitFromAnyPipe) query: PageQuery) {
    return this.usersService.findByPage(query);
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Put(':id')
  modifyUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
