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

  // Timer

  const deadline = '2023-02-30';
  console.log(Date.parse(deadline));
  // parse gets date in millisecunds

  function getTimeRemaing(endTime) {
    let days, hours, minutes, seconds;
    const timer = Date.parse(endTime) - Date.parse(new Date());
    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(timer / (1000 * 60 * 60 * 24));
      hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((timer / (1000 * 60)) % 60);
      seconds = Math.floor((timer / 1000) % 60);
    }

    return { timer, days, hours, minutes, seconds }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaing(endTime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.timer <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock('.timer', deadline);

  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('[data-close]');
  modalTrigger.forEach(item => {
    item.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    })
  });

  modalCloseBtn.addEventListener('click', closeModal)

  modal.addEventListener('click', (event) => {
    if (event.target == modal) {
      closeModal();
    }
  })

  document.addEventListener('keydown', (event) => {
    console.log(event.code);
    if (event.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  })

  // key code: https://www.toptal.com/developers/keycode

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

})