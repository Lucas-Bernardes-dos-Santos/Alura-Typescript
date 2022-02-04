import { Negociacao } from "../models/Negociacao.js"

export class NegociacaoControl {
  
  private inputData: HTMLInputElement
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement

  constructor() {
    this.inputData = document.querySelector('#data')!
    this.inputQuantidade = document.querySelector('#quantidade')!
    this.inputValor = document.querySelector('#valor')!
  }

  adicionar(): void {
    const negociacao = this.criarNegociacao()

    console.log(negociacao)

    this.limparFormulario()
  }

  criarNegociacao(): Negociacao {
    return new Negociacao(
      this.inputData.valueAsDate!,
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