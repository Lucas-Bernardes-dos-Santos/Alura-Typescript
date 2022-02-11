import { Negociacao } from "../models/Negociacao.js";
export class NegociacaoService {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((_negociacoesDoDia) => {
            return _negociacoesDoDia.map(negociacao => {
                return new Negociacao(new Date(), negociacao.vezes, negociacao.montante);
            });
        });
    }
}
