import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class MinhaLojaDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nomeExibicao: string;

  @ApiProperty()
  @IsNumberString()
  @IsInt()
  @Min(1)
  @Max(5)
  tempoCD: number;
}
