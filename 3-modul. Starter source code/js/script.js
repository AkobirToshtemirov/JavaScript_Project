window.addEventListener("DOMContentLoaded", () => {

  const tabsParent = document.querySelector('.tabheader__items');
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.style.display = "none";
    });
 
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    })
  }

  function showTabContent(index = 0) {
    tabsContent[index].style.display = 'block';
    tabs[index].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if(target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, idx) => {
        if(target == item) {
          hideTabContent();
          showTabContent(idx);        
        }
      })
    }
  })
})