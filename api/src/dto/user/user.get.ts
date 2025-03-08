import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
	@ApiProperty()
	id: number;

	@ApiProperty()
	firstname: string;

	@ApiProperty()
	lastname: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	passwordHash: string;
}
