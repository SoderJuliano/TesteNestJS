export class RespostaPadrao {
  valido: boolean;
  status: number;
  mensagem: Array<string>;
  conteudo: Array<any>;

  respostaPadrao(valido: boolean, status: number): RespostaPadrao {
    this.valido = valido;
    this.status = status;
    return this;
  }
  setMensagem(s: string) {
    if (!this.mensagem) {
      this.mensagem = [s];
    } else {
      this.mensagem.push(s);
    }
  }
  setConteudo(obj: any) {
    if (!this.conteudo) {
      this.conteudo = [obj];
    } else {
      this.conteudo.push(obj);
    }
  }
}
