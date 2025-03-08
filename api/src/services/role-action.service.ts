import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
// Service
import { GenericService } from './generic.service';
// Dto
import { SetRoleActionDto } from '@/dto/role-action/role-action.set';
import { GetRoleActionDto } from '@/dto/role-action/role-action.get';

@Injectable()
export class RoleActionService extends GenericService<GetRoleActionDto, SetRoleActionDto> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
