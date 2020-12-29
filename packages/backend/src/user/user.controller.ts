import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '@sandorbiba/shared';
import { DocumentType } from '@typegoose/typegoose';
import { User } from './user.model';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiParam({ name: 'id' })
  findOne(@Param('id') id: string): Promise<DocumentType<User>> {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto): Promise<DocumentType<User>> {
    if (createUserDto.password === createUserDto.confirmPassword) {
      return this.userService.create(createUserDto);
    }
    throw new BadRequestException();
  }
}
