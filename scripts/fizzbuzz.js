export function fizzbuzz (numero) {
  if (typeof numero !== 'number') throw new Error('Debe propocionar un numero')
  if (Number.isInteger(numero) === false) throw new Error('Debe propocionar un numero entero')

  const resultado = []
  if (numero === 0) return []
  for (let n = 0; n <= numero; n++) {
    const frase = fizzbuzzParticular(n)
    resultado.push(frase)
  }
  return resultado
}

export function fizzbuzzParticular (number) {
  let frase = ''
  if (number % 3 === 0) frase += 'Fizz'
  if (number % 5 === 0) frase += 'Buzz'
  if (frase === '') frase = `${number}`

  return frase
}
