export class View {
    constructor(_seletor) {
        const elemento = document.querySelector(_seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${_seletor} não existe no documento.`);
        }
    }
    update(_modelo) {
        let template = this.template(_modelo);
        this.elemento.innerHTML = template;
    }
}
