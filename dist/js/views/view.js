export class View {
    constructor(_seletor, _escape) {
        this.escape = false;
        this.elemento = document.querySelector(_seletor);
        if (_escape)
            this.escape = _escape;
    }
    update(_modelo) {
        let template = this.template(_modelo);
        if (this.escape) {
            // Verificando se tem algum script no template e removendo
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
