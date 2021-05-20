const smothScroll = document.querySelectorAll('a[href^="#"]:not(a[href="#"])')

smothScroll.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const id = link.getAttribute('href').substr(1)
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })
  })
})
