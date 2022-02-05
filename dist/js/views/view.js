export class View {
    constructor(_seletor) {
        this.elemento = document.querySelector(_seletor);
    }
    template(_model) {
        throw Error('Classe  filha precisa implementar o método template');
    }
    update(_model) {
        const template = this.template(_model);
        this.elemento.innerHTML = template;
    }
}
