export function tempoExecucao(_segundos: boolean = false) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value

    descriptor.value = function(...args: Array<any>) {
      const t1 = performance.now()

      const retorno = metodoOriginal.apply(this, args)

      const t2 = performance.now()
      
      if(_segundos) {
        console.log(`Método [${propertyKey}] - tempo de execução: ${(t2 -t1)/1000} segundos`)
      }
      else {
        console.log(`Método [${propertyKey}] - tempo de execução: ${(t2 -t1)} milisegundos`)
      }

      return retorno
    }

    return descriptor
  }
}