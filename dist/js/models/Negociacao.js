export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //#region Métodos
    volume() {
        return this.quantidade * this.valor;
    }
    //#endregion
    //#region Getters e Setters
    get Data() {
        return new Date(this.data.getTime());
    }
    get Quantidade() {
        return this.quantidade;
    }
    get Valor() {
        return this.valor;
    }
}
