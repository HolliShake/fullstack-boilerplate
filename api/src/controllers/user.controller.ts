import { Controller } from '@nestjs/common';
import { GenericController } from './generic.controller';
// Service
import { UserService } from '@/services/user.service';
// Dto
import { SetUserDto } from '@/dto/user/user.set';
// Model
import { UserModel } from '@/models/user.model';

@Controller("user")
export class UserController extends GenericController <UserModel, SetUserDto, UserService> {
	constructor(protected readonly userService: UserService) {
		super(userService);
	}
}
