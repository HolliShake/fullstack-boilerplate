import { Controller } from '@nestjs/common';
import { GenericController } from './generic.controller';
// Service
import { RoleService } from '@/services/role.service';
// Dto
import { SetRoleDto } from '@/dto/role/role.set';
// Model
import { RoleModel } from '@/models/role.model';

@Controller("role")
export class RoleController extends GenericController <RoleModel, SetRoleDto, RoleService> {
	constructor(protected readonly roleService: RoleService) {
		super(roleService);
	}
}
