export class Negociacao {

  constructor(
    private data: Date,
    private quantidade: number,
    private valor: number
  ) {}

  //#region Métodos
    volume(): number {
      return this.quantidade * this.valor
    }
  //#endregion

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