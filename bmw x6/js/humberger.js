const menuElement = document.querySelector('.menu')
const humburgerElement = document.querySelector('.humburger-menu')
const linkElement = document.querySelectorAll('a[href^="#"]:not(a[href="#"])')

const toggleHumburger = () => {
  menuElement.classList.toggle('menu-active')
  humburgerElement.classList.toggle('humburger-menu-active')
}

linkElement.forEach((link) => {
  link.addEventListener('click', () => {
    menuElement.classList.remove('menu-active')
    humburgerElement.classList.remove('humburger-menu-active')
  })
})

humburgerElement.addEventListener('click', toggleHumburger)