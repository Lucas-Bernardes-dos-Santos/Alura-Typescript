var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspecionar } from "../decorators/inspecionar.js";
import { tempoExecucao } from "../decorators/tempo-execucao.js";
import { ListaNegociacoes } from "../models/ListaNegociacoes.js";
import { Negociacao } from "../models/Negociacao.js";
import { NegociacaoService } from "../service/negociacoesService.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";
export class NegociacaoControl {
    constructor() {
        this.listaNegociacoes = new ListaNegociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesService = new NegociacaoService();
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
    importarDados() {
        this.negociacoesService.obterNegociacoesDoDia()
            .then(_negociacoesDoDia => {
            for (let negociacao of _negociacoesDoDia) {
                this.listaNegociacoes.adicionar(negociacao);
            }
            this.negociacoesView.update(this.listaNegociacoes);
        });
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
__decorate([
    inspecionar,
    tempoExecucao()
], NegociacaoControl.prototype, "adicionar", null);
__decorate([
    tempoExecucao()
], NegociacaoControl.prototype, "importarDados", null);
