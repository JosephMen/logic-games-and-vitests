const diccionario = {
  unidades: {
    base: 'X',
    mediaBase: 'V',
    unidad: 'I'
  },
  decenas: {
    base: 'C',
    mediaBase: 'L',
    unidad: 'X'
  },
  centenas: {
    base: 'M',
    mediaBase: 'D',
    unidad: 'C'
  },
  milesimas: {
    unidad: 'M'
  }
}
/**
 *
 * @param {number} decimal numero decimal entero positivo
 */
export function decimalesARomanos (decimal) {
  if (decimal === undefined) throw new Error('Debe ingresar un numero')
  if (typeof decimal !== 'number') throw new Error('La entrada deber ser un numero')
  if (!Number.isInteger(decimal)) throw new Error('El numero debe ser entero')
  if (decimal >= 4000) throw new Error('El numero maximo es 3999')

  let unidades = decimal % 10
  unidades = Number.parseInt(unidades)
  let decenas = (decimal % 100) / 10
  decenas = Number.parseInt(decenas)
  let centenas = (decimal % 1000) / 100
  centenas = Number.parseInt(centenas)
  let milesimas = (decimal % 10000) / 1000
  milesimas = Number.parseInt(milesimas)

  const milesimasSimbolos = calcularSimbolo(milesimas, diccionario.milesimas)
  const centenasSimbolos = calcularSimbolo(centenas, diccionario.centenas)
  const decenasSimbolos = calcularSimbolo(decenas, diccionario.decenas)
  const unidadesSimbolos = calcularSimbolo(unidades, diccionario.unidades)
  console.log(milesimas, centenas, decenas, unidades, decimal)
  return milesimasSimbolos + centenasSimbolos + decenasSimbolos + unidadesSimbolos
}

export function calcularSimbolo (numero, baseActual) {
  let resultado = ''
  if (numero === 0) return ''

  const baseSimbolo = baseActual.base

  const mediaBaseSimbolo = baseActual.mediaBase

  const unidadSimbolo = baseActual.unidad

  console.log(baseSimbolo, mediaBaseSimbolo, unidadSimbolo)
  if (numero === 9) return (unidadSimbolo + baseSimbolo)
  if (numero > 5) {
    resultado += mediaBaseSimbolo
    numero -= 5
  }
  if (numero === 5) return mediaBaseSimbolo
  if (numero === 4) return (unidadSimbolo + mediaBaseSimbolo)

  for (let i = 0; i < numero; i++) {
    resultado += unidadSimbolo
  }
  return resultado
}
