

const  form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputhigh = document.querySelector('#high')


const Modal = {
    Wrapper: document.querySelector('.modal-wrapper'),
    Message: document.querySelector('.modal.title span'),
    ButtonClose: document.querySelector('.modal button.close'),

    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const high = inputhigh.value

    const result = IMC(weight, high)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText =  message
    Modal.open()

}

modalBtnClose.onclick = () => {
    // modalWrapper.classList.remove('open')
    Modal.close()
}

function IMC(weight, high) {
    return (weight/ ((high / 100) ** 2)).toFixed(2)
}
