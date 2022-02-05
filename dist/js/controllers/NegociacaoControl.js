import { ListaNegociacoes } from "../models/ListaNegociacoes.js";
import { Negociacao } from "../models/Negociacao.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";
export class NegociacaoControl {
    //#endregion
    constructor() {
        this.listaNegociacoes = new ListaNegociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.listaNegociacoes);
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this.listaNegociacoes.adicionar(negociacao);
        this.negociacoesView.update(this.listaNegociacoes);
        this.mensagemView.update('Negociação realizada com sucesso.');
        this.limparFormulario();
    }
    criarNegociacao() {
        let data = this.inputData.value.split('-');
        let date = new Date(`${data[1]}/${data[2]}/${data[0]}`);
        return new Negociacao(date, this.inputQuantidade.valueAsNumber, this.inputValor.valueAsNumber);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
