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
                <td>${negociacao.Data.getDate()}/${negociacao.Data.getMonth() + 1}/${negociacao.Data.getFullYear()}</td>
                <td>${negociacao.Quantidade}</td>
                <td>${negociacao.Valor}</td>
              </tr>
              `;
        })}
        </tbody>
      </table>
    `;
    }
    update(_listaNegociacoes) {
        const template = this.template(_listaNegociacoes);
        this.elemento.innerHTML = template;
    }
}
