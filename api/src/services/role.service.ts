import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
// Service
import { GenericService } from './generic.service';
// Dto
import { SetRoleDto } from '@/dto/role/role.set';
import { GetRoleDto } from '@/dto/role/role.get';

@Injectable()
export class RoleService extends GenericService<GetRoleDto, SetRoleDto> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
