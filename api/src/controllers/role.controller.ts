import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
// GenericController
import { GenericController } from './generic.controller';
// Service
import { RoleService } from '@/services/role.service';
// Dto
import { SetRoleDto } from '@/dto/role/role.set';
import { GetRoleDto } from '@/dto/role/role.get';

@ApiTags("Role")
@Controller("role")
export class RoleController extends GenericController <GetRoleDto, SetRoleDto, RoleService> {
	constructor(protected readonly roleService: RoleService) {
		super(roleService);
	}

	@Get("all")
    @ApiOperation({ 
        summary: 'Retrieve all Role records', 
        operationId: 'getAllRole' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Successfully retrieved Role records', 
		type: [GetRoleDto]
	})
    async getAllRole(@Res() res: Response): Promise<Response<GetRoleDto[]>> {
		return await this.genericGetAll(res);
	}

    @Get(":id")
    @ApiOperation({ 
        summary: 'Retrieve a single Role by ID', 
        operationId: 'getRoleById' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Successfully retrieved the Role', 
		type: GetRoleDto
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Role not found' 
    })
    async getRole(@Res() res: Response, @Param('id') id: string): Promise<Response<GetRoleDto|null|undefined>> {
        return await this.genericGetById(res, id);
    }

    @Post("create")
    @ApiOperation({ 
        summary: 'Create a new Role', 
        operationId: 'createRole' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'Role successfully created', 
        type: GetRoleDto 
    })
    @ApiResponse({ 
        status: 400, 
        description: 'Invalid request data' 
    })
    @ApiResponse({ 
        status: 500, 
        description: 'Internal server error while creating Role' 
    })
    async createRole(@Res() res: Response, @Body() data: SetRoleDto): Promise<Response<GetRoleDto|null|undefined>> {
        return await this.genericCreate(res, data);
    }

    @Put("update/:id")
    @ApiOperation({ 
        summary: 'Update an existing Role', 
        operationId: 'updateRole' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Role successfully updated', 
		type: GetRoleDto
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Role not found' 
    })
    @ApiResponse({ 
        status: 500, 
        description: 'Internal server error while updating Role' 
    })
    async updateRole(@Res() res: Response, @Param('id') id: string, @Body() data: SetRoleDto): Promise<Response<GetRoleDto|null|undefined>> {
        return await this.genericUpdate(res, id, data);
    }

    @Delete("delete/:id")
    @ApiOperation({ 
        summary: 'Delete a Role by ID', 
        operationId: 'deleteRole' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Role successfully deleted', 
		type: GetRoleDto
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Role not found' 
    })
    async deleteRole(@Res() res: Response, @Param('id') id: string): Promise<Response<GetRoleDto|null|undefined>> {
        return await this.genericDelete(res, id);
    }
}
