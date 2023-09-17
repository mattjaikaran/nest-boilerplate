import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class PasswordlessLoginDto {
  @ApiProperty({
    description: 'Destination requires an email',
    default: 'test@example.com',
    type: String,
  })
  @IsEmail()
  destination: string;
}
