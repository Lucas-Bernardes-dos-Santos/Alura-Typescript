export class View {
    constructor(_seletor, _escape) {
        this.escape = false;
        const elemento = document.querySelector(_seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${_seletor} não existe no documento.`);
        }
        if (_escape)
            this.escape = _escape;
    }
    update(_modelo) {
        let template = this.template(_modelo);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
