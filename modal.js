export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal.title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => {

    Modal.close()
}

// esc no site //
window.addEventListener('keydown', handlekeydown) 
function handlekeydown(event) {
    if (event.key === 'Escape'){
        Modal.close()
    }
    
}
