export class View {
    constructor(_seletor) {
        this.elemento = document.querySelector(_seletor);
    }
    update(_modelo) {
        const template = this.template(_modelo);
        this.elemento.innerHTML = template;
    }
}
