import { NegociacaoControl } from "./controllers/NegociacaoControl.js"

const negociacaoControl = new NegociacaoControl()
const form = document.querySelector('.form')!

form.addEventListener('submit', event => {
  event.preventDefault()
  negociacaoControl.adicionar()
})