const moreElements = document.querySelectorAll('.more')
const modalElements = document.querySelector('.modal')

const openModal = () => {
  modalElements.classList.remove('hidden')
}

const closeModal = () => {
  modalElements.classList.add('hidden')
}

moreElements.forEach(more => {
  more.addEventListener('click', openModal)
})

modalElements.addEventListener('click', (event) => {
  const target = event.target
  if (target.classList.contains('overlay')) {
    modalElements.classList.add('hidden')
  } else if (target.classList.contains('modal__close')) {
    modalElements.classList.add('hidden')
  }
})