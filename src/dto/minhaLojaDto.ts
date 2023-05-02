import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class MinhaLojaDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nomeExibicao: string;

  @ApiProperty()
  @IsNotEmpty()
  //@IsNumber()
  @IsInt()
  @Min(0, { message: 'O valor mínimo para tempo de preparo é 0' })
  @Max(2)
  tempoCD: number;
}
