var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspecionar } from "../decorators/inspecionar.js";
import { tempoExecucao } from "../decorators/tempo-execucao.js";
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
__decorate([
    inspecionar,
    tempoExecucao(true)
], View.prototype, "update", null);
