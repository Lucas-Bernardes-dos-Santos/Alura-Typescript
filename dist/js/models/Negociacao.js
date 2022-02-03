export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this.data = _data,
            this.quantidade = _quantidade;
        this.valor = _valor;
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
