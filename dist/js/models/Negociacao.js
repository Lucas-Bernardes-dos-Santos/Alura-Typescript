"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Negociacao = void 0;
class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this.data = _data,
            this.quantidade = _quantidade;
        this.valor = _valor;
    }
    //#region Getters e Setters
    get Data() {
        return this.data;
    }
    get Quatidade() {
        return this.quantidade;
    }
    get Valor() {
        return this.valor;
    }
}
exports.Negociacao = Negociacao;
