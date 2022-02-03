export class Negociacao {
  private data: Date
  private quantidade: number
  private valor: number

  constructor(_data: Date, _quantidade: number, _valor: number) {
    this.data = _data,
    this.quantidade = _quantidade
    this.valor = _valor
  }

  //#region Getters e Setters
  public get Data(): Date {
    return this.data
  }
  
  public get Quatidade(): number {
    return this.quantidade
  }
  
  public get Valor(): number {
    return this.valor
  }
  //#endregion
}