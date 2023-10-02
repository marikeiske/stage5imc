
import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import {IMC, notANumber} from './utils.js'


const  form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputhigh = document.querySelector('#high')


form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const high = inputhigh.value

    const showAlertError = notANumber(weight) || notANumber(high)
     if (showAlertError){
        AlertError.open()
        console.log('mostrar o aleta de erro')
        return;
     }

    const result = IMC(weight, high)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText =  message
    Modal.open()

}

