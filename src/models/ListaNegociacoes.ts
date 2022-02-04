import { Negociacao } from "./Negociacao.js";

export class ListaNegociacoes {
  private listaNegociacoes: Negociacao[] = []

  adicionar(_negociacao: Negociacao) {
    this.listaNegociacoes.push(_negociacao)
  }

  listar(): readonly Negociacao[] {
    return this.listaNegociacoes
  }
}