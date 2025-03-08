import { ApiProperty } from '@nestjs/swagger';

export class SetRoleDto {
  @ApiProperty()
  roleName: string;
}
