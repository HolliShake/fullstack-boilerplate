import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
// Service
import { GenericService } from './generic.service';
// Dto
import { SetUserDto } from '@/dto/user/user.set';
import { GetUserDto } from '@/dto/user/user.get';

@Injectable()
export class UserService extends GenericService<GetUserDto, SetUserDto> {
	constructor(prisma: PrismaService) {
		super(prisma);
	}
}
