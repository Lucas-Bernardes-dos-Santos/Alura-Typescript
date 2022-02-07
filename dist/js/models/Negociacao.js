import { DiasDaSemana } from "../enums/diasDaSemana.js";
export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criarInstancia(_data, _quantidade, _valor) {
        let data = _data.split('-');
        let dataFormatada = new Date(`${data[1]}/${data[2]}/${data[0]}`);
        return new Negociacao(dataFormatada, parseInt(_quantidade), parseFloat(_valor));
    }
    static verificarDiaUtil(_data) {
        return (_data.getDay() !== DiasDaSemana.DOMINGO)
            && (_data.getDay() !== DiasDaSemana.SABADO);
    }
    volume() {
        return this.quantidade * this.valor;
    }
    dataFormatada() {
        return `${this.Data.getDate()}/${this.Data.getMonth() + 1}/${this.Data.getFullYear()}`;
    }
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
