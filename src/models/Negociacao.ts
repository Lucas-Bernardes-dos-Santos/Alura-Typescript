export class Negociacao {

  constructor(
    private data: Date,
    private quantidade: number,
    private valor: number) {}

  //#region Getters e Setters
  public get Data(): Date {
    return this.data
  }
  
  public get Quantidade(): number {
    return this.quantidade
  }
  
  public get Valor(): number {
    return this.valor
  }
  //#endregion
}