/* eslint-disable no-undef */
import { fizzbuzzParticular, fizzbuzz } from './scripts/fizzbuzz'
import { decimalesARomanos } from './scripts/decimalesARomanos'
import { romanosADecimales } from './scripts/romanosADecimales'

const formFizzBuzz = document.querySelector('.form-fizzbuzz')
const fizzbuzzSalida = document.querySelector('.fizzbuzz-salida')

const formDecimalARomano = document.querySelector('.decimales-form')
const salidaDecimalRomano = document.querySelector('.salidaDecimalRomano')

const formRomanoADecimal = document.querySelector('#romanos-form')
const salidaRomanoDecimal = document.querySelector('.salidaRomanoDecimal')

formFizzBuzz.addEventListener('submit', (event) => {
  event.preventDefault()
  let numeroIngresado = fizzBuzzNumber.value
  if (numeroIngresado) {
    numeroIngresado = parseInt(numeroIngresado)
    if (esLista.checked) {
      const listaFizzBuzz = fizzbuzz(numeroIngresado)
      fizzbuzzSalida.innerHTML = ''
      listaFizzBuzz.forEach((valor, index) => {
        fizzbuzzSalida.innerHTML += `<span class="span-salida"> [${index}]-${valor}</span>`
      })
      return
    }
    fizzbuzzSalida.innerHTML = `<span class="span-salida">${fizzbuzzParticular(numeroIngresado)}</span>`
  }
})

formRomanoADecimal.addEventListener('submit', (event) => {
  event.preventDefault()
  if (numeroRomano.value) {
    const numeroIngresado = numeroRomano.value
    try {
      const resultado = romanosADecimales(numeroIngresado)
      salidaRomanoDecimal.innerHTML = `<span class="span-salida">${resultado}</span>`
    } catch (e) {
      salidaRomanoDecimal.innerHTML = `<span class="span-salida">${e.message}</span>`
    }
  }
})

formDecimalARomano.addEventListener('submit', (event) => {
  event.preventDefault()
  if (numeroDecimal.value) {
    const numeroIngresado = parseInt(numeroDecimal.value)
    try {
      const resultado = decimalesARomanos(numeroIngresado)
      salidaDecimalRomano.innerHTML = `<span class="span-salida">${resultado}</span>`
    } catch (e) {
      salidaDecimalRomano.innerHTML = `<span class="span-salida">${e.message}</span>`
    }
  }
})
