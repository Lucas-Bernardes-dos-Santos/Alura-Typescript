import { View } from "./view.js";
export class MensagemView extends View {
    template(_model) {
        return `
      <p class="alert alert-info">${_model}<p>
    `;
    }
}
