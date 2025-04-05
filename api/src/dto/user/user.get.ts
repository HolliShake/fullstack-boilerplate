import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
	@ApiProperty({
		description: 'The unique identifier of the user',
		example: 1,
		type: Number,
	})
	id: number;

	@ApiProperty({
		description: "User's first name",
		example: 'John',
		type: String,
	})
	firstname: string;

	@ApiProperty({
		description: "User's last name",
		example: 'Doe',
		type: String,
	})
	lastname: string;

	@ApiProperty({
		description: "User's email address",
		example: 'john.doe@example.com',
		type: String,
	})
	email: string;

	@ApiProperty({
		description: 'Hashed password of the user',
		example: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm',
		type: String,
		writeOnly: true,
	})
	passwordHash: string;
}
