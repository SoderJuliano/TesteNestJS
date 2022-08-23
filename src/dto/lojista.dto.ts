import { IsNotEmpty, IsString } from 'class-validator';

export class LojistaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  nomeLoja: string;
}
