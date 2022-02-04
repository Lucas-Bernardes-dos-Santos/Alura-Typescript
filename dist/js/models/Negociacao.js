export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //#region Getters e Setters
    get Data() {
        return this.data;
    }
    get Quantidade() {
        return this.quantidade;
    }
    get Valor() {
        return this.valor;
    }
}
