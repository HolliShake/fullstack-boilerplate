import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { UserModel } from '@/models/user.model';
import { GenericService } from './generic.service';

@Injectable()
export class UserService extends GenericService <UserModel> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
