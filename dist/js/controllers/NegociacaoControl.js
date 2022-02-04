import { ListaNegociacoes } from "../models/ListaNegociacoes.js";
import { Negociacao } from "../models/Negociacao.js";
export class NegociacaoControl {
    constructor() {
        this.listaNegociacoes = new ListaNegociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this.listaNegociacoes.adicionar(negociacao);
        this.limparFormulario();
    }
    criarNegociacao() {
        return new Negociacao(this.inputData.valueAsDate, this.inputQuantidade.valueAsNumber, this.inputValor.valueAsNumber);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
