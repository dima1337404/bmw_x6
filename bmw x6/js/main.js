document.addEventListener('DOMContentLoaded', () => {

  const featureLinksElements = document.querySelectorAll('.feature__link')
  const featureSubElements = document.querySelectorAll('.feature-sub')

  featureLinksElements.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('feature__link_active') === true) {
        btn.classList.remove('feature__link_active')
        featureSubElements[index].classList.add('hidden')
      } else {
        featureSubElements.forEach((featureSubElement) => {
          featureSubElement.classList.add('hidden')
        })
        featureLinksElements.forEach((featureLinksElement) => {
          featureLinksElement.classList.remove('feature__link_active')
        })
        featureSubElements[index].classList.remove('hidden')
        btn.classList.add('feature__link_active')
      }      
    })
  })
})