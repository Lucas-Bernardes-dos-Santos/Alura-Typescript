import { inspecionar } from "../decorators/inspecionar.js"
import { tempoExecucao } from "../decorators/tempo-execucao.js"
import { ListaNegociacoes } from "../models/ListaNegociacoes.js"
import { Negociacao } from "../models/Negociacao.js"
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

  public importarDados(): void {
    fetch('http://localhost:8080/dados')
      .then(res => res.json()) // Recebendo os dados da API e convertendo para JSON, já que nós sabemos que o retorno é JSON

      .then((dados: Array<any>) => { // Não sei quais tipos de dados vão vir do Back-end, porém sei que vai ser um array
        return dados.map(dadosAtuais => { // Convertendo os dados para uma nova negociação
          return new Negociacao(
            new Date(), 
            dadosAtuais.vezes, 
            dadosAtuais.montante)
        })
      })
      
      .then(negociacoesDeHoje => { // Adicionando essa nova negociação na lista de Negociações
        for(let negociacao of negociacoesDeHoje) {
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