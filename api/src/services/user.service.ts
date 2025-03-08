import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
// Service
import { GenericService } from './generic.service';
// Model
import { UserModel } from '@/models/user.model';
// Dto
import { SetUserDto } from '@/dto/user/user.set';

@Injectable()
export class UserService extends GenericService <UserModel, SetUserDto> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
