import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { AprovacaoDto } from './aprovacaoDTO';
import { EnderecoDto } from './enderecoDTO';
import { FreteDto } from './freteDTO';

export class LojistaDto {
  aprovacao: AprovacaoDto;

  @IsDate()
  dataCriacao: Date;

  @IsDate()
  dataModificacaoDocumento: Date;

  @IsString()
  nomeFantasia: string;

  @IsString()
  @IsNotEmpty()
  razaoSocial: string;

  @IsString()
  @IsNotEmpty()
  numeroDocumento: string;

  @IsString()
  @IsNotEmpty()
  telefoneComercial: string;

  enderecos: Array<EnderecoDto>;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  urlSite: string;

  frete: FreteDto;
}

function getNomeFantasia(): string {
  return this.nomeFantasia ? this.nomeFantasia : this.razaoSocial;
}
