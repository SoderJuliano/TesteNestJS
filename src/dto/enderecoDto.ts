import { ApiProperty } from "@nestjs/swagger";

export class EnderecoDTO {
  @ApiProperty()
  tipo: string;

  @ApiProperty()
  cep: string;

  @ApiProperty()
  logradouro: string;

  @ApiProperty()
  complemento?: string;

  @ApiProperty()
  bairro: string;

  @ApiProperty()
  estado: string;

  @ApiProperty()
  cidade: string;

  @ApiProperty()
  pais: string;
}
