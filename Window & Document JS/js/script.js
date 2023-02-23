const box = document.querySelector('.box');
const btn = document.querySelector('.btn');

// clientWidth
// clientHeight
// offsetWidth rarely used
// offsetHeight rarely used
// scrollHeight

const width = box.clientWidth;
const height = box.clientHeight;
console.log("width: " + width + "\nheight: " + height);

const scHeight = box.scrollHeight;
console.log(scHeight);

btn.addEventListener('click', () => {
  box.style.height = scHeight + 'px';
})

// Computed Style

const style = getComputedStyle(box);
console.log(style);

console.log(document.documentElement.clientWidth);

// clientWidth important
// scrollHeight important

// window & document