import { IsEmail, IsNotEmpty, IsString, MinLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Alex Chacon' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre completo es obligatorio' })
  name!: string;

  @ApiProperty({ example: 'alexchacon@gmail.com' })
  @IsEmail({}, { message: 'El formato del correo no es válido' })
  @IsNotEmpty()
  email!: string;

  @ApiProperty({ example: 'Password1234', description: 'Mínimo 8 caracteres, letras y números' })
  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contraseña debe contener letras y números',
  })
  password!: string;
}