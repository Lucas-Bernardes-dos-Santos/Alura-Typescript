export abstract class View<T> {

  protected elemento: HTMLElement
  private escape = false

  constructor(_seletor: string, _escape?: boolean) {
    this.elemento = document.querySelector(_seletor)!
    if(_escape)
      this.escape = _escape
  }

  protected abstract template(_modelo: T): string 

  update(_modelo: T): void {
    let template = this.template(_modelo)

    if(this.escape) {
      // Verificando se tem algum script no template e removendo
      template = template.replace(/<script>[\s\S]*?<\/script>/, '')
    }

    this.elemento.innerHTML = template
  }
}