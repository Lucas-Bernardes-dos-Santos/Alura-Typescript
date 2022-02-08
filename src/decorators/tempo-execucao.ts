export function tempoExecucao() {
  return function( _target: any, _propertyKey: string, _descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = _descriptor.value

    _descriptor.value = function(...args: Array<any>) {
      const t1 = performance.now()

      const retorno = metodoOriginal.apply(this, args)

      const t2 = performance.now()
      console.log(`Método [${_propertyKey}] - tempo de execução: ${(t2 -t1)/1000}`)

      return retorno
    }

    return _descriptor
  }
}