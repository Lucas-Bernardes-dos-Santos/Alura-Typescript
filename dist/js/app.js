import { NegociacaoControl } from "./controllers/NegociacaoControl.js";
const negociacaoControl = new NegociacaoControl();
const form = document.querySelector('.form');
const btnImportar = document.querySelector('#btnImportar');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        negociacaoControl.adicionar();
    });
}
else {
    throw Error('App.ts ERRO: Verifique se o formulário existe.');
}
if (btnImportar) {
    btnImportar.addEventListener('click', () => {
        negociacaoControl.importarDados();
    });
}
else {
    throw Error('App.ts ERRO: Botão Importar não foi encontrado.');
}
