import { Negociacao } from "./Negociacao.js";

export class ListaNegociacoes {
  private listaNegociacoes: Array<Negociacao> = []

  adicionar(_negociacao: Negociacao) {
    this.listaNegociacoes.push(_negociacao)
  }

  listar(): ReadonlyArray<Negociacao> {
    return this.listaNegociacoes
  }
}