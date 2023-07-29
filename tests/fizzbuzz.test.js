import { fizzbuzzParticular, fizzbuzz } from '../scripts/fizzbuzz.js'
import { describe, it, expect } from 'vitest'

describe.skip('fizzbuzz', () => {
  it('deber ser una funcion', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('Debe lanzar error si no se le pasa parametro', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('Debe lanzar error si el parametro no es un numero', () => {
    expect(() => fizzbuzz('1')).toThrow()
  })

  it('Debe lanzar error si el parametro no es un numero entero', () => {
    expect(() => fizzbuzz(1.2)).toThrow()
  })

  it('Debe ser un array vacio ( [] ) si el numero es 0', () => {
    expect(fizzbuzz(0)).toEqual([])
  })

  it('Deber ser Fizz si el numero es 3', () => {
    expect(fizzbuzzParticular(3)).toBe('Fizz')
  })
  it('Deber ser Buzz si el numero es 5', () => {
    expect(fizzbuzzParticular(5)).toBe('Buzz')
  })
  it('Deber ser 2 si el numero es 2', () => {
    expect(fizzbuzzParticular(2)).toBe('2')
  })
})
