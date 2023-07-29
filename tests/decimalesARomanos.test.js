import { describe, expect, it } from 'vitest'
import { decimalesARomanos } from '../scripts/decimalesARomanos'

describe.skip('decimales a romanos debe retornar', () => {
  it('Debe ser una funcion', () => {
    expect(typeof decimalesARomanos).toBe('function')
  })
  it('Debe retornar [I, V, X, L, C, D, M] cuando se le pasen [1, 5, 10, 50, 100, 500, 1000]', () => {
    expect(decimalesARomanos(1)).toBe('I')
    expect(decimalesARomanos(5)).toBe('V')
    expect(decimalesARomanos(10)).toBe('X')
    expect(decimalesARomanos(50)).toBe('L')
    expect(decimalesARomanos(100)).toBe('C')
    expect(decimalesARomanos(500)).toBe('D')
    expect(decimalesARomanos(1000)).toBe('M')
  })

  it('Debe retornar IV cuando se le pase 4', () => {
    expect(decimalesARomanos(4)).toBe('IV')
  })
  it('Debe retornar VI cuando se le pase 6', () => {
    expect(decimalesARomanos(6)).toBe('VI')
  })
  it('Debe retornar VII cuando se le pase 7', () => {
    expect(decimalesARomanos(7)).toBe('VII')
  })
  it('Debe retornar VIII cuando se le pase 8', () => {
    expect(decimalesARomanos(8)).toBe('VIII')
  })
  it('Debe retornar IX cuando se le pase 9', () => {
    expect(decimalesARomanos(9)).toBe('IX')
  })
})

describe.skip('Decimales a enteros debe caer cuando: ', () => {
  it('Debe lanzar error cuando no se le pasen argumentos', () => {
    expect(() => decimalesARomanos()).toThrow()
  })
  it('Debe lanzar error cuando se le pase un argumento que no sea decimal', () => {
    expect(() => decimalesARomanos('string')).toThrow()
  })
  it('Debe lanzar error cuando se le pasen decimal flotantes', () => {
    expect(() => decimalesARomanos(1236.4)).toThrow()
  })
  it('Debe lanzar error cuando el argumento sea un numero superior a 3999', () => {
    expect(() => decimalesARomanos(4852)).toThrow()
  })
})
