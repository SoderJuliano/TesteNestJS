import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { AprovacaoDTO } from './aprovacaoDTO';
import { EnderecoDTO } from './enderecoDTO';

export class LojistaDto {
  aprovacao: AprovacaoDTO;

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

  enderecos: Array<EnderecoDTO>;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  urlSite: string;
}

function getNomeFantasia(): string {
  return this.nomeFantasia ? this.nomeFantasia : this.razaoSocial;
}
