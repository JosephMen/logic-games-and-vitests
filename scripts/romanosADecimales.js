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
  if (numerosRomanosEntrada === undefined) throw new Error('Debe proporcionar un numero romano')
  if (typeof numerosRomanosEntrada !== 'string') throw new Error('Debe proporcionar un numero romano')

  if (sonNumerosRomanos(numerosRomanosEntrada) === false) throw new Error('Aparecen caracteres que no son numeros romanos')
  const numerosRomanos = numerosRomanosEntrada.toLowerCase()
  let resultado = 0
  let repeticiones = 0
  let numeroPasado = ''
  let valorNumeroPasado = 0

  for (const numero in numerosRomanos) {
    const numeroActual = numerosRomanos[numero]
    const valorNumeroActual = diccionario[numeroActual]

    if (numeroPasado !== '') valorNumeroPasado = diccionario[numeroPasado]

    if (numeroPasado === numeroActual) {
      repeticiones++
    } else {
      repeticiones = 1
    }

    if (repeticiones > 3) throw new Error('No es un formato de numero romano valido')

    if (valorNumeroPasado < valorNumeroActual && valorNumeroPasado !== 0) {
      console.log()
      if (esMediaBase(valorNumeroPasado)) {
        throw new Error('Las unicas que restan son las bases no las medias bases')
      }
      if ((valorNumeroPasado * 10) !== valorNumeroActual &&
      esMediaBase(valorNumeroActual) === false) {
        throw new Error('Las bases solo se restan con una base anterior')
      }
      resultado -= valorNumeroPasado
      resultado += (valorNumeroActual - valorNumeroPasado)
      continue
    }

    numeroPasado = numeroActual
    resultado += diccionario[numeroActual]
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
try {
  const numero = romanosADecimales('MMMCMXCIX')
  console.log(numero)
} catch (e) {
  console.log(e)
}
