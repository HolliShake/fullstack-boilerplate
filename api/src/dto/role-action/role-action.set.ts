import { ApiProperty } from '@nestjs/swagger';

export class SetRoleActionDto {
	@ApiProperty()
	action: string;

	@ApiProperty()
	roleId: number;
}
