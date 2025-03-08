import { ApiProperty } from '@nestjs/swagger';

export class GetRoleDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  roleName: string;
}