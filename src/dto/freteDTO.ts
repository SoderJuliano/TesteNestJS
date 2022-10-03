import { IsNumber, Max, Min } from 'class-validator';

export class FreteDto {
  descricao: string;
  endpoint: string;
  @IsNumber()
  @Max(5)
  @Min(1)
  tempoPreparo: number;
  cep: string;

  setTempoPreparo(valor: number): void {
    this.tempoPreparo = valor;
  }
  setCep(cep: string): void {
    this.cep = cep;
  }
}
