import { ListaNegociacoes } from "../models/ListaNegociacoes.js"
import { Negociacao } from "../models/Negociacao.js"
import { NegociacoesView } from "../views/NegociacoesView.js"

export class NegociacaoControl {
  
  //#region Atributos
  private inputData: HTMLInputElement
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement

  private listaNegociacoes = new ListaNegociacoes()
  private negociacoesView = new NegociacoesView('#negociacoesView')
  //#endregion

  constructor() {
    this.inputData = document.querySelector('#data')!
    this.inputQuantidade = document.querySelector('#quantidade')!
    this.inputValor = document.querySelector('#valor')!
    
    this.negociacoesView.update(this.listaNegociacoes)
  }

  adicionar(): void {
    const negociacao = this.criarNegociacao()

    this.listaNegociacoes.adicionar(negociacao)
    this.negociacoesView.update(this.listaNegociacoes)

    this.limparFormulario()
  }

  criarNegociacao(): Negociacao {

    let data = this.inputData.value.split('-')
    let date = new Date(`${data[1]}/${data[2]}/${data[0]}`)
    
    return new Negociacao(
      date,
      this.inputQuantidade.valueAsNumber,
      this.inputValor.valueAsNumber 
    )
  }

  limparFormulario(): void {
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''

    this.inputData.focus()
  }
}