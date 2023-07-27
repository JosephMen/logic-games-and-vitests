import { describe, it, expect } from 'vitest'
import { romanosADecimales, esMediaBase, sonNumerosRomanos } from '../scripts/romanosADecimales'

describe.skip('Medias bases', () => {
  it('Debe retornar false si se la pasa 1, 10 o 100 pues no son medias bases', () => {
    expect(esMediaBase(1)).toBe(false)
    expect(esMediaBase(10)).toBe(false)
    expect(esMediaBase(100)).toBe(false)
  })

  it('Debe retornar true si se la pasa 5, 50 o 500 pues si son medias bases', () => {
    expect(esMediaBase(5)).toBe(true)
    expect(esMediaBase(50)).toBe(true)
    expect(esMediaBase(500)).toBe(true)
  })
})

describe.skip('Son numeros romanos: ', () => {
  it('Debe retornar false si los numeros ingresados no son romanos', () => {
    expect(sonNumerosRomanos('KAVNO')).toBe(false)
  })
  it('Debe retornar true si los numeros ingresados no son romanos', () => {
    expect(sonNumerosRomanos('MLCVIX')).toBe(true)
  })
})

describe.skip('Numeros Romanos: debe retornar', () => {
  it('Debe ser una funcion', () => {
    expect(romanosADecimales).toBeTypeOf('function')
  })
  it('Debe retornar 1 si el caracter es I o i', () => {
    expect(romanosADecimales('I')).toBe(1)
    expect(romanosADecimales('i')).toBe(1)
  })

  it('Debe retornar 5 si el caracter es V o v', () => {
    expect(romanosADecimales('V')).toBe(5)
    expect(romanosADecimales('v')).toBe(5)
  })

  it('Debe retornar 50 si el caracter es L o l', () => {
    expect(romanosADecimales('L')).toBe(50)
    expect(romanosADecimales('l')).toBe(50)
  })

  it('Debe retornar 100 si el caracter es C o c', () => {
    expect(romanosADecimales('C')).toBe(100)
    expect(romanosADecimales('c')).toBe(100)
  })

  it('Debe retornar 1000 si el caracter es M o m', () => {
    expect(romanosADecimales('M')).toBe(1000)
    expect(romanosADecimales('m')).toBe(1000)
  })

  it('Debe retornar 2 si el numero es II', () => {
    expect(romanosADecimales('II')).toBe(2)
  })
  it('Debe retornar 3 si el numero es III', () => {
    expect(romanosADecimales('III')).toBe(3)
  })
  it('Debe retornar 4 si el numero es IV', () => {
    expect(romanosADecimales('IV')).toBe(4)
  })
  it('Debe retornar 6 si el numero es VI', () => {
    expect(romanosADecimales('VI')).toBe(6)
  })
  it('Debe retornar 30 si el numero es XXX', () => {
    expect(romanosADecimales('XXX')).toBe(30)
  })
  it('Debe retornar 40 si se le pasa XL', () => {
    expect(romanosADecimales('XL')).toBe(40)
  })
  it('Debe retornar 50 si se le pasa XL', () => {
    expect(romanosADecimales('L')).toBe(50)
  })
  it('Debe retornar 60 si se le pasa XL', () => {
    expect(romanosADecimales('LX')).toBe(60)
  })
  it('Debe retornar 70 si se le pasa LXX', () => {
    expect(romanosADecimales('LXX')).toBe(70)
  })
  it('Debe retornar 80 si se le pasa LXXX', () => {
    expect(romanosADecimales('LXXX')).toBe(80)
  })
  it('Debe retornar 81 si se le pasa LXXXI', () => {
    expect(romanosADecimales('LXXXI')).toBe(81)
  })
  it('Debe retornar 82 si se le pasa LXXXII', () => {
    expect(romanosADecimales('LXXXII')).toBe(82)
  })
  it('Debe retornar 83 si se le pasa LXXXIII', () => {
    expect(romanosADecimales('LXXXIII')).toBe(83)
  })
  it('Debe retornar 84 si se le pasa LXXXIV', () => {
    expect(romanosADecimales('LXXXIV')).toBe(84)
  })
  it('Debe retornar 85 si se le pasa LXXXV', () => {
    expect(romanosADecimales('LXXXV')).toBe(85)
  })
  it('Debe retornar 86 si se le pasa LXXXVI', () => {
    expect(romanosADecimales('LXXXVI')).toBe(86)
  })
  it('Debe retornar 87 si se le pasa LXXXVII', () => {
    expect(romanosADecimales('LXXXVII')).toBe(87)
  })
  it('Debe retornar 88 si se le pasa LXXXVIII', () => {
    expect(romanosADecimales('LXXXVIII')).toBe(88)
  })
  it('Debe retornar 89 si se le pasa LXXXVIII', () => {
    expect(romanosADecimales('LXXXIX')).toBe(89)
  })
  it('Debe retornar 90 si se le pasa XC', () => {
    expect(romanosADecimales('XC')).toBe(90)
  })
  it('Debe retornar 9 si se le pasa IX', () => {
    expect(romanosADecimales('IX')).toBe(9)
  })
})

describe.skip('Numeros romanos: Debe caer cuando ', () => {
  it('Debe lanzar error si no se le pasan argumentos', () => {
    expect(() => romanosADecimales()).toThrow()
  })
  it('Debe lanzar error si el parametro no es un string', () => {
    expect(() => romanosADecimales()).toThrow()
  })
  it('Debe lanzar error si los numeros no corresponden a los romanos', () => {
    expect(() => romanosADecimales('VDDOCKN')).toThrow()
  })
  it('Debe lanzar error si se la pasa VX o LC pues medias bases no restan a las bases', () => {
    expect(() => romanosADecimales('VX')).toThrow()
    expect(() => romanosADecimales('LC')).toThrow()
  })
  it('Debe lanzar error si se la pasa IC o XM pues las bases solo se restan con la base anterior', () => {
    expect(() => romanosADecimales('IC')).toThrow()
    expect(() => romanosADecimales('XM')).toThrow()
  })
  it('Debe lanzar error si se le pasa IIII pues no es un numero valido', () => {
    expect(() => romanosADecimales('IIII')).toThrow()
  })
  it('Debe lanzar error si se le pasa LM o VC pues medias bases no restan a bases', () => {
    expect(() => romanosADecimales('LM')).toThrow()
    expect(() => romanosADecimales('VC')).toThrow()
  })
  it('Debe lanzar error si se le pasa VL o LD pues medias bases no restan a medias bases', () => {
    expect(() => romanosADecimales('VL')).toThrow()
    expect(() => romanosADecimales('LD')).toThrow()
    expect(() => romanosADecimales('VD')).toThrow()
  })
  it('Debe lanzar error si se le pasa LM o VC pues medias bases no restan a bases', () => {
    expect(() => romanosADecimales('LM')).toThrow()
    expect(() => romanosADecimales('VC')).toThrow()
  })
  it('Debe lanzar error si se la pasa LXXXIIII pues no es un numero valido', () => {
    expect(() => romanosADecimales('LXXXIIII')).toThrow()
  })
})
