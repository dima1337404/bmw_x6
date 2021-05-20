const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]')
const tabsFieldElements = document.querySelectorAll('[data-tabs-field]')
const tabsHeaderElements = document.querySelectorAll('[data-tabs-header]')

for (const tab of tabsHandlerElements) {
  tab.addEventListener('click', () => {
    tabsHandlerElements.forEach(item => {
      if (tab === item) {
        item.classList.add('design-list__item_active')
      } else {
        item.classList.remove('design-list__item_active')
      }
    })

    tabsFieldElements.forEach(item => {
      if(tab.dataset.tabsHandler === item.dataset.tabsField) {
        item.classList.remove('hidden')
      } else {
        item.classList.add('hidden')
      }
    })

    tabsHeaderElements.forEach(item => {
      if (tab.dataset.tabsHandler === item.dataset.tabsHeader) {
        item.classList.remove('hidden')
      } else {
        item.classList.add('hidden')
      }
    })
  })
}