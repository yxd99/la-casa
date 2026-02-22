import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

/**
 * DTO de entrada para crear un Example.
 */
export class CreateExampleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(255)
  name!: string;
}
