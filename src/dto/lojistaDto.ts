import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { AprovacaoDTO } from './aprovacaoDto';
import { EnderecoDTO } from './enderecoDto';
import { FreteDTO } from './freteDto';

export class LojistaDTO {
  @ApiProperty()
  aprovacao: AprovacaoDTO;

  @ApiProperty()
  @IsDate()
  dataCriacao: Date;

  @ApiProperty()
  @IsDate()
  dataModificacaoDocumento: Date;

  @ApiProperty({
    description: 'Nome de exebição da loja',
    example: 'Borracharia do Jorge troca de óleo gratis'
  })
  @IsString()
  nomeFantasia: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  razaoSocial: string;

  @ApiProperty({
    description: 'CNPJ',
    example: '01538988011'
  })
  @IsString()
  @IsNotEmpty()
  numeroDocumento: string;

  @ApiProperty({
    description: 'Telefone de exebição',
    example: '(49)999992606'
  })
  @IsString()
  @IsNotEmpty()
  telefoneComercial: string;

  @ApiProperty()
  enderecos: Array<EnderecoDTO>;

  @ApiProperty({
    description: 'Email comercial',
    example: 'dycjh@example.com'
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  urlSite: string;

  @ApiProperty()
  frete: FreteDTO;
}

function getNomeFantasia(): string {
  return this.nomeFantasia ? this.nomeFantasia : this.razaoSocial;
}
