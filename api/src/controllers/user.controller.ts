import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
// GenericController
import { GenericController } from './generic.controller';
// Service
import { UserService } from '@/services/user.service';
// Dto
import { SetUserDto } from '@/dto/user/user.set';
import { GetUserDto } from '@/dto/user/user.get';

@ApiTags("User")
@Controller("user")
export class UserController extends GenericController <GetUserDto, SetUserDto, UserService> {
	constructor(protected readonly userService: UserService) {
		super(userService);
	}

	@Get("all")
    @ApiOperation({ 
        summary: 'Retrieve all User records', 
        operationId: 'getAllUser' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Successfully retrieved User records', 
		type: [GetUserDto]
	})
    @ApiOperation({ 
        summary: 'Retrieve a single User by ID', 
        operationId: 'getUserById' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Successfully retrieved the User', 
		type: GetUserDto
    })
    @ApiResponse({ 
        status: 404, 
        description: 'User not found' 
    })
    async getUser(@Res() res: Response, @Param('id') id: string): Promise<Response<GetUserDto|null|undefined>> {
        return await this.genericGetById(res, id);
    }

    @Post("create")
    @ApiOperation({ 
        summary: 'Create a new User', 
        operationId: 'createUser' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'User successfully created',  
		type: GetUserDto
    })
    @ApiResponse({ 
        status: 400, 
        description: 'Invalid request data' 
    })
    @ApiResponse({ 
        status: 500, 
        description: 'Internal server error while creating User' 
    })
    async createUser(@Res() res: Response, @Body() data: SetUserDto): Promise<Response<GetUserDto|null|undefined>> {
        return await this.genericCreate(res, data);
    }

    @Put("update/:id")
    @ApiOperation({ 
        summary: 'Update an existing User', 
        operationId: 'updateUser' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'User successfully updated', 
		type: GetUserDto
    })
    @ApiResponse({ 
        status: 404, 
        description: 'User not found' 
    })
    @ApiResponse({ 
        status: 500, 
        description: 'Internal server error while updating User' 
    })
    async updateUser(@Res() res: Response, @Param('id') id: string, @Body() data: SetUserDto): Promise<Response<GetUserDto|null|undefined>> {
        return await this.genericUpdate(res, id, data);
    }

    @Delete("delete/:id")
    @ApiOperation({ 
        summary: 'Delete a User by ID', 
        operationId: 'deleteUser' 
    })
    @ApiResponse({ 
        status: 200, 
        description: 'User successfully deleted', 
		type: GetUserDto
    })
    @ApiResponse({ 
        status: 404, 
        description: 'User not found' 
    })
    async deleteUser(@Res() res: Response, @Param('id') id: string): Promise<Response<GetUserDto|null|undefined>> {
        return await this.genericDelete(res, id);
    }
}
