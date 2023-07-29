import { decimalesARomanos } from './decimalesARomanos'
const diccionario = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000
}

export function romanosADecimales (numerosRomanosEntrada) {
  if (numerosRomanosEntrada === undefined) throw new Error('Debe proporcionar una entrada')
  if (typeof numerosRomanosEntrada !== 'string') throw new Error('Debe proporcionar un numero romano')

  if (sonNumerosRomanos(numerosRomanosEntrada) === false) throw new Error('Aparecen caracteres que no son numeros romanos')
  const numerosRomanos = numerosRomanosEntrada.toLowerCase()
  let resultado = 0
  let repeticiones = 0
  let numeroPasado = ''
  let valorNumeroPasado = 0
  let huboResta = false

  for (const numero in numerosRomanos) {
    const numeroActual = numerosRomanos[numero]
    const valorNumeroActual = diccionario[numeroActual]

    if (numeroPasado !== '') valorNumeroPasado = diccionario[numeroPasado]

    if (repeticiones > 1 && valorNumeroActual > valorNumeroPasado) {
      throw new Error('Despues de una repeticion solo se puede escribir un numero menor')
    }

    if (numeroPasado === numeroActual) {
      repeticiones++
    } else {
      repeticiones = 1
    }

    if (repeticiones > 3) throw new Error('No es un formato de numero romano valido')

    // console.log(valorNumeroActual, valorNumeroPasado)
    if (huboResta && valorNumeroActual >= valorNumeroPasado) {
      throw new Error('Si hubo una resta el siguiente numero no puede ser igual o mayor')
    }
    if (huboResta && esMediaBase(valorNumeroPasado) && (valorNumeroActual * 5) === valorNumeroPasado) {
      throw new Error('Si hubo una resta con una media base, el siguiente digito no puede ser la base anterior')
    }

    if (valorNumeroPasado < valorNumeroActual && valorNumeroPasado !== 0) {
      if (esMediaBase(valorNumeroPasado)) {
        throw new Error('Las unicas que restan son las bases no las medias bases')
      }
      if ((valorNumeroPasado * 10) !== valorNumeroActual &&
      esMediaBase(valorNumeroActual) === false) {
        throw new Error('Las bases solo se restan con una base anterior')
      }
      huboResta = true
      resultado -= valorNumeroPasado
      numeroPasado = numeroActual
      resultado += (valorNumeroActual - valorNumeroPasado)
      continue
    }
    huboResta = false
    numeroPasado = numeroActual
    resultado += diccionario[numeroActual]
  }

  // Prueba de congruencia con su funcion inversa
  try {
    const esCongruente = (decimalesARomanos(resultado) === numerosRomanosEntrada.toLocaleUpperCase())
    if (esCongruente === false) throw new Error()
  } catch (e) {
    throw new Error('No es un numero valido')
  }
  return resultado
}

/**
 *
 * @param {string} numerosEntrada
 */
export function sonNumerosRomanos (numerosEntrada) {
  const numeros = numerosEntrada.toLowerCase()
  const numerosRomanos = numeros.split('')
  for (const indice in numerosRomanos) {
    const numeroRomano = numerosRomanos[indice]
    if (!diccionario[numeroRomano]) return false
  }
  return true
}
export function esMediaBase (numero) {
  while (numero >= 5) {
    if (numero === 5) return true
    if ((numero / 10) === 5) {
      return true
    }
    numero = numero / 10
  }
  return false
}
