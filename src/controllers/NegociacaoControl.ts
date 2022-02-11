import { inspecionar } from "../decorators/inspecionar.js"
import { tempoExecucao } from "../decorators/tempo-execucao.js"
import { ListaNegociacoes } from "../models/ListaNegociacoes.js"
import { Negociacao } from "../models/Negociacao.js"
import { NegociacaoService } from "../service/negociacoesService.js"
import { MensagemView } from "../views/mensagemView.js"
import { NegociacoesView } from "../views/negociacoesView.js"

export class NegociacaoControl {
  
  //#region Atributos
  private inputData: HTMLInputElement
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement

  private listaNegociacoes = new ListaNegociacoes()
  private negociacoesView = new NegociacoesView('#negociacoesView')
  private mensagemView = new MensagemView('#mensagemView')
  private negociacoesService = new NegociacaoService()
  //#endregion

  constructor() {
    this.inputData = document.querySelector('#data') as HTMLInputElement
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement
    this.inputValor = document.querySelector('#valor') as HTMLInputElement
    
    this.negociacoesView.update(this.listaNegociacoes)
  }

  @inspecionar
  @tempoExecucao()
  public adicionar(): void {

    const negociacao = Negociacao.criarInstancia(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    )

    if(Negociacao.verificarDiaUtil(negociacao.Data)) { 
      this.listaNegociacoes.adicionar(negociacao)
      this.negociacoesView.update(this.listaNegociacoes)
      this.mensagemView.update('Negociação realizada com sucesso.')

      this.limparFormulario()
    } else {
      this.mensagemView.update('Negociações só podem ser realizadas em dias úteis.')
    }
  }

  @tempoExecucao()
  public importarDados(): void {
    
    this.negociacoesService.obterNegociacoesDoDia()
    .then(_negociacoesDoDia => { // Adicionando essa nova negociação na lista de Negociações
      for(let negociacao of _negociacoesDoDia) {
        this.listaNegociacoes.adicionar(negociacao)
      }
      this.negociacoesView.update(this.listaNegociacoes)
    })
  }

  private limparFormulario(): void {
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''

    this.inputData.focus()
  }
}