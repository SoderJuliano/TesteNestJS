import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { AprovacaoDTO } from './AprovacaoDTO';
import { EnderecoDTO } from './EnderecoDTO';
import { FreteDTO } from './FreteDTO';

export class LojistaDTO {
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

  frete: FreteDTO;
}

function getNomeFantasia(): string {
  return this.nomeFantasia ? this.nomeFantasia : this.razaoSocial;
}
