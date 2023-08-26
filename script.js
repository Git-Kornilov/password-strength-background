'use strict';

const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener(
  'input',
  () => (background.style.filter = `blur(${20 - password.value.length * 2}px)`)
);

// password.addEventListener('input', e => {
//   const input = e.target.value;
//   const length = input.length;
//   const blurValue = 20 - length * 2;
//   background.style.filter = `blur(${blurValue}px)`;
// });
