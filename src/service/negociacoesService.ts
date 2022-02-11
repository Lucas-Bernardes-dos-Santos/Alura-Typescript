import { InNegociacoesDoDia } from "../interfaces/InNegociacoesDoDia.js";
import { Negociacao } from "../models/Negociacao.js";

export class NegociacaoService {

  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')
      .then(res => res.json()) // Recebendo os dados da API e convertendo para JSON, já que nós sabemos que o retorno é JSON

      .then((_negociacoesDoDia: Array<InNegociacoesDoDia>) => {
        return _negociacoesDoDia.map(negociacao => {
          return new Negociacao(
            new Date(),
            negociacao.vezes,
            negociacao.montante
          )
        })
      })
  }
}