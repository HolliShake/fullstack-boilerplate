import { Controller, Get } from '@nestjs/common';
import { UserModel } from '@/models/user.model';
import { UserService } from '@/services/user.service';
import { GenericController } from './generic.controller';

@Controller("user")
export class UserController extends GenericController <UserModel, UserService> {
	constructor(protected readonly userService: UserService) {
		super(userService);
	}

	@Get()
	async index() {
		return 'hello';
	}
}
