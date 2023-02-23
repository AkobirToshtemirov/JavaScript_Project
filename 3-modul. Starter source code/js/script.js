window.addEventListener("DOMContentLoaded", () => {

  const tabsParent = document.querySelector('.tabheader__items');
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const loader = document.querySelector('.loader');

  // Loader

  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500)
  }, 2000)

  // Tabs

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    })
  }

  function showTabContent(index = 0) {
    tabsContent[index].classList.add('show', 'fade')
    tabsContent[index].classList.remove('hide');
    tabs[index].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, idx) => {
        if (target == item) {
          hideTabContent();
          showTabContent(idx);
        }
      })
    }
  })
})