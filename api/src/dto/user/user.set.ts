import { ApiProperty } from '@nestjs/swagger';

export class SetUserDto {
  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  passwordHash: string;
}
