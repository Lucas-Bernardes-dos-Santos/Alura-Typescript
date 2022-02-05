export class View<T> {

  protected elemento: HTMLElement

  constructor(_seletor: string) {
    this.elemento = document.querySelector(_seletor)!
  }

  template(_model: T): string {
    throw Error('Classe  filha precisa implementar o método template')
  }

  update(_model: T): void {
    const template = this.template(_model)
    this.elemento.innerHTML = template
  }
}