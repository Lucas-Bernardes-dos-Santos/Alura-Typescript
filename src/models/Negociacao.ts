import { DiasDaSemana } from "../enums/diasDaSemana.js"

export class Negociacao {

  constructor(
    private data: Date,
    private quantidade: number,
    private valor: number
  ) { }

  public static criarInstancia(_data: string, _quantidade: string, _valor: string): Negociacao {
    let data = _data.split('-')
    let dataFormatada = new Date(`${data[1]}/${data[2]}/${data[0]}`)

    return new Negociacao(
      dataFormatada,
      parseInt(_quantidade),
      parseFloat(_valor)
    )
  }

  public static verificarDiaUtil(_data: Date): boolean {
    return (_data.getDay() !== DiasDaSemana.DOMINGO) 
    && (_data.getDay() !== DiasDaSemana.SABADO)
  }

  public volume(): number {
    return this.quantidade * this.valor
  }

  public dataFormatada(): string{
    return `${this.Data.getDate()}/${this.Data.getMonth() + 1}/${this.Data.getFullYear()}`
  }

  //#region Getters e Setters
  public get Data(): Date {
    return new Date(this.data.getTime())
  }

  public get Quantidade(): number {
    return this.quantidade
  }

  public get Valor(): number {
    return this.valor
  }
  //#endregion
}