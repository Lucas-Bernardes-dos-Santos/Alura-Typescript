export abstract class View<T> {

  protected elemento: HTMLElement

  constructor(_seletor: string) {
    this.elemento = document.querySelector(_seletor)!
  }

  protected abstract template(_modelo: T): string 

  update(_modelo: T): void {
    const template = this.template(_modelo)
    this.elemento.innerHTML = template
  }
}