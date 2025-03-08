import { ApiProperty } from '@nestjs/swagger';

export class GetRoleActionDto {
	@ApiProperty()
	id: number;

	@ApiProperty()
	action: string;

	@ApiProperty()
	roleId: number;
}
