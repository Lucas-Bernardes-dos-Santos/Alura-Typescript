import { escape } from "../decorators/escape.js"
import { ListaNegociacoes } from "../models/ListaNegociacoes.js"
import { View } from "./view.js"

export class NegociacoesView extends View<ListaNegociacoes> {

  @escape
  protected template(_listaNegociacoes: ListaNegociacoes): string {
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
          ${
            _listaNegociacoes.listar().map(negociacao => {
              return `
              <tr>
                <td>${negociacao.dataFormatada()}</td>
                <td>${negociacao.Quantidade}</td>
                <td>${negociacao.Valor}</td>
              </tr>
              `
            })
          }
        </tbody>
      </table>
    `
  }
}