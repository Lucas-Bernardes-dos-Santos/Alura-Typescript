export abstract class View<T> {

  protected elemento: HTMLElement

  constructor(_seletor: string) {
    const elemento = document.querySelector(_seletor)

    if(elemento) {
      this.elemento = elemento as HTMLElement
    } 
    else {
      throw Error(`Seletor ${_seletor} não existe no documento.`)
    }
  }

  protected abstract template(_modelo: T): string 

  update(_modelo: T): void {
    let template = this.template(_modelo)
    this.elemento.innerHTML = template
  }
}