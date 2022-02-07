import { View } from "./view.js"

export class MensagemView extends View<String> {

  protected template(_model: string): string {
    return `
      <p class="alert alert-info">${_model}<p>
    `
  }
}