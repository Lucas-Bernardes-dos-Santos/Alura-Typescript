var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escape } from "../decorators/escape.js";
import { View } from "./view.js";
export class NegociacoesView extends View {
    template(_listaNegociacoes) {
        return `
      <table class="table table-hover tabler-bordered">
        <thead>
          <tr>  
            <th>Data</th>
            <th>Quantidade</th>
            <th>Preço</th>
          <tr>
        </thead>

        <tbody>
          ${_listaNegociacoes.listar().map(negociacao => {
            return `
              <tr>
                <td>${negociacao.dataFormatada()}</td>
                <td>${negociacao.Quantidade}</td>
                <td>${negociacao.Valor}</td>
              </tr>
              `;
        })}
        </tbody>
      </table>
    `;
    }
}
__decorate([
    escape
], NegociacoesView.prototype, "template", null);
