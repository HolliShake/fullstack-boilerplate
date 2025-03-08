import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
// Service
import { GenericService } from './generic.service';
// Model
import { RoleModel } from '@/models/role.model';
// Dto
import { SetRoleDto } from '@/dto/role/role.set';

@Injectable()
export class RoleService extends GenericService<RoleModel, SetRoleDto> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
