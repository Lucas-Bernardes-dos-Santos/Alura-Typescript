export class ListaNegociacoes {
    constructor() {
        this.listaNegociacoes = [];
    }
    adicionar(_negociacao) {
        this.listaNegociacoes.push(_negociacao);
    }
    listar() {
        return this.listaNegociacoes;
    }
}
