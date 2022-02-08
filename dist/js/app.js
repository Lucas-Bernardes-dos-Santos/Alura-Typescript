import { NegociacaoControl } from "./controllers/NegociacaoControl.js";
const negociacaoControl = new NegociacaoControl();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        negociacaoControl.adicionar();
    });
}
else {
    throw Error('App.ts ERRO: Verifique se o formulário existe.');
}
