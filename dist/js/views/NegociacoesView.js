export class NegociacoesView {
    constructor(_seletor) {
        this.negociacoesTabela = document.querySelector(_seletor);
    }
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
        }).join('')}
        </tbody>
      </table>
    `;
    }
    update(_listaNegociacoes) {
        const template = this.template(_listaNegociacoes);
        this.negociacoesTabela.innerHTML = template;
    }
}
