window.addEventListener("DOMContentLoaded", () => {

  const tabParent = document.querySelector('.tabheader__items');
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabContent = document.querySelectorAll('.tabcontent');

  function hideTabContent() {
    tabContent.forEach(item => {
      item.style.display = "none";
    });
    tabs.forEach(item => {
      item.style.display = "none";
    })
  }

  hideTabContent();

  function showTabContent() {

  }

})