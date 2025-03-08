import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
// GenericController
import { GenericController } from './generic.controller';
// Service
import { RoleActionService } from '@/services/role-action.service';
// Dto
import { SetRoleActionDto } from '@/dto/role-action/role-action.set';
import { GetRoleActionDto } from '@/dto/role-action/role-action.get';

@ApiTags("RoleAction")
@Controller("roleAction")
export class RoleActionController extends GenericController <GetRoleActionDto, SetRoleActionDto, RoleActionService> {
	constructor(protected readonly roleActionService: RoleActionService) {
		super(roleActionService);
	}

	@Get("all")
    @ApiOperation({ 
        summary: 'Retrieve all RoleAction records', 
        operationId: 'getAllRoleAction' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Successfully retrieved RoleAction records', 
		type: [GetRoleActionDto]
	})
	async getAllRoleAction(@Res() res: Response): Promise<Response<GetRoleActionDto[]>> {
		return await this.genericGetAll(res);
	}

	@Get(":id")
    @ApiOperation({ 
        summary: 'Retrieve a single RoleAction by ID', 
        operationId: 'getRoleActionById' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Successfully retrieved the RoleAction', 
		type: GetRoleActionDto
    })
    @ApiResponse({ 
        status: 404, 
        description: 'RoleAction not found' 
    })
    async getRoleAction(@Res() res: Response, @Param('id') id: string): Promise<Response<GetRoleActionDto|null|undefined>> {
        return await this.genericGetById(res, id);
    }

    @Post("create")
    @ApiOperation({ 
        summary: 'Create a new RoleAction', 
        operationId: 'createRoleAction' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'RoleAction successfully created',  
		type: GetRoleActionDto
    })
    @ApiResponse({ 
        status: 400, 
        description: 'Invalid request data' 
    })
    @ApiResponse({ 
        status: 500, 
        description: 'Internal server error while creating RoleAction' 
    })
    async createRoleAction(@Res() res: Response, @Body() data: SetRoleActionDto): Promise<Response<GetRoleActionDto|null|undefined>> {
        return await this.genericCreate(res, data);
    }

    @Put("update/:id")
    @ApiOperation({ 
        summary: 'Update an existing RoleAction', 
        operationId: 'updateRoleAction' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'RoleAction successfully updated', 
		type: GetRoleActionDto
    })
    @ApiResponse({ 
        status: 404, 
        description: 'RoleAction not found' 
    })
    @ApiResponse({ 
        status: 500, 
        description: 'Internal server error while updating RoleAction' 
    })
    async updateRoleAction(@Res() res: Response, @Param('id') id: string, @Body() data: SetRoleActionDto): Promise<Response<GetRoleActionDto|null|undefined>> {
        return await this.genericUpdate(res, id, data);
    }

    @Delete("delete/:id")
    @ApiOperation({ 
        summary: 'Delete a RoleAction by ID', 
        operationId: 'deleteRoleAction' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'RoleAction successfully deleted', 
		type: GetRoleActionDto
    })
    @ApiResponse({ 
        status: 404, 
        description: 'RoleAction not found' 
    })
    async deleteRoleAction(@Res() res: Response, @Param('id') id: string): Promise<Response<GetRoleActionDto|null|undefined>> {
        return await this.genericDelete(res, id);
    }
}
