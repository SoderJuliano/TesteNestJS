import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export class FreteDTO {
  @ApiPropertyOptional()
  descricao?: string;
  
  @ApiProperty()
  endpoint: string;
  
  @ApiProperty()
  @IsNumber()
  @Max(2)
  @Min(0)
  tempoPreparo: number;
  
  @ApiProperty()
  cep: string;

  setTempoPreparo(valor: number): void {
    this.tempoPreparo = valor;
  }
  setCep(cep: string): void {
    this.cep = cep;
  }
}
