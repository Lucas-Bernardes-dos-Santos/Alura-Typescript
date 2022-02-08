import { ListaNegociacoes } from "../models/ListaNegociacoes.js";
import { Negociacao } from "../models/Negociacao.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";
export class NegociacaoControl {
    //#endregion
    constructor() {
        this.listaNegociacoes = new ListaNegociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.listaNegociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.criarInstancia(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (Negociacao.verificarDiaUtil(negociacao.Data)) {
            this.listaNegociacoes.adicionar(negociacao);
            this.negociacoesView.update(this.listaNegociacoes);
            this.mensagemView.update('Negociação realizada com sucesso.');
            this.limparFormulario();
        }
        else {
            this.mensagemView.update('Negociações só podem ser realizadas em dias úteis.');
        }
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
