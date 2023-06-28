'use strict';

// Selectors

const themChangerBtn = document.querySelector('.theme__changing--btns-box');
const themeChangerCircle = document.querySelector('.theme-changer');
const calculatedValue = document.querySelector('.calculated-value');
const mainNumbersContainer = document.getElementById('numbers-box');

// Theme changing function

const setTheme = function (theme) {
  const root = document.documentElement;
  if (theme === 1) {
    root.style.setProperty('--main-background', 'hsl(222, 26%, 31%)');
    root.style.setProperty('--keypad-background', 'hsl(223, 31%, 20%)');
    root.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)');
    root.style.setProperty('--key-background', 'hsl(225, 21%, 49%)');
    root.style.setProperty('--key-shadow', ' hsl(224, 28%, 35%)');
    root.style.setProperty('--dark-red', 'hsl(6, 70%, 34%)');
    root.style.setProperty('--red-toggle-background', ' hsl(6, 63%, 50%)');
    root.style.setProperty(
      '--light-greyish-key-background',
      'hsl(30, 25%, 89%)'
    );
    root.style.setProperty('--greyish-orange-key-shadow', 'hsl(28, 16%, 65%)');
    root.style.setProperty('--Very-dark-grayish-blue', 'hsl(221, 14%, 31%)');
    root.style.setProperty('--white', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--calc-theme-value', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--reset-del', 'hsl(225, 21%, 49%)');
    root.style.setProperty('--reset-del-key-shadow', 'hsl(224, 28%, 35%)');
    root.style.setProperty('--equal-sign-color', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--hover-toggle-theme', 'hsl(6, 63%, 60%)');
    root.style.setProperty('--hover-reset-del', 'hsl(225, 21%, 70%)');
    root.style.setProperty('--hover-number-operators', 'hsl(30, 25%, 100%)');

    themeChangerCircle.style = 'transform: translateX(0%)';
  }

  if (theme === 2) {
    root.style.setProperty('--main-background', 'hsl(0, 0%, 90%)');
    root.style.setProperty('--keypad-background', 'hsl(0, 5%, 81%)');
    root.style.setProperty('--screen-background', 'hsl(0, 0%, 93%)');
    root.style.setProperty('--key-background', 'hsl(185, 42%, 37%)');
    root.style.setProperty('--key-shadow', 'hsl(185, 58%, 25%)');
    root.style.setProperty('--dark-red', 'hsl(25, 99%, 27%)');
    root.style.setProperty('--red-toggle-background', 'hsl(25, 98%, 40%)');
    root.style.setProperty(
      '--light-greyish-key-background',
      'hsl(45, 7%, 89%)'
    );
    root.style.setProperty('--greyish-orange-key-shadow', 'hsl(35, 11%, 61%)');
    root.style.setProperty('--Very-dark-grayish-blue', 'hsl(60, 10%, 19%)');
    root.style.setProperty('--white', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--calc-theme-value', 'hsl(60, 10%, 19%)');
    root.style.setProperty('--reset-del', 'hsl(185, 42%, 37%)');
    root.style.setProperty('--reset-del-key-shadow', 'hsl(185, 58%, 25%)');
    root.style.setProperty('--equal-sign-color', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--hover-toggle-theme', 'hsl(25, 98%, 60%)');
    root.style.setProperty('--hover-reset-del', 'hsl(185, 42%, 60%)');
    root.style.setProperty('--hover-number-operators', 'hsl(45, 7%, 100%)');

    themeChangerCircle.style = 'transform: translateX(110%)';
  }
  if (theme === 3) {
    root.style.setProperty('--main-background', 'hsl(268, 75%, 9%)');
    root.style.setProperty('--keypad-background', 'hsl(268, 71%, 12%)');
    root.style.setProperty('--screen-background', 'hsl(268, 71%, 12%)');
    root.style.setProperty('--key-background', 'hsl(185, 42%, 37%)');
    root.style.setProperty('--key-shadow', 'hsl(185, 58%, 25%)');
    root.style.setProperty('--dark-red', 'hsl(177, 92%, 70%)');
    root.style.setProperty('--red-toggle-background', 'hsl(176, 100%, 44%)');
    root.style.setProperty(
      '--light-greyish-key-background',
      'hsl(268, 47%, 21%)'
    );
    root.style.setProperty('--greyish-orange-key-shadow', 'hsl(290, 70%, 36%)');
    root.style.setProperty('--Very-dark-grayish-blue', 'hsl(52, 100%, 62%)');
    root.style.setProperty('--white', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--calc-theme-value', 'hsl(52, 100%, 62%)');
    root.style.setProperty('--reset-del', 'hsl(281, 89%, 26%)');
    root.style.setProperty('--reset-del-key-shadow', 'hsl(285, 91%, 52%)');
    root.style.setProperty('--equal-sign-color', 'hsl(198, 20%, 13%)');
    root.style.setProperty('--hover-toggle-theme', 'hsl(176, 100%, 60%)');
    root.style.setProperty('--hover-reset-del', 'hsl(281, 89%, 45%)');
    root.style.setProperty('--hover-number-operators', 'hsl(30, 25%, 100%)');
    root.style.setProperty('--hover-number-operators', 'hsl(268, 47%, 40%)');

    themeChangerCircle.style = 'transform: translateX(245%)';
  }
};

themChangerBtn.addEventListener('click', function (e) {
  const { theme } = e.target.dataset;
  if (!theme) return;
  setTheme(+theme);
});

// Calculating function

let value = '';

mainNumbersContainer.addEventListener('click', function (e) {
  const operator = function () {
    if (
      value.slice(-1) === '/' ||
      value.slice(-1) === '-' ||
      value.slice(-1) === '+' ||
      value.slice(-1) === '*'
    ) {
      value = value.slice(0, -1);
    }
  };
  const elementNum = e.target;

  if (elementNum.classList.contains('number')) {
    value += elementNum.textContent;
    calculatedValue.textContent = value;
  }

  if (elementNum.classList.contains('multiplay')) {
    operator();
    if (value === '') {
      value = '';
    } else value += '*';
    calculatedValue.textContent = value;
  }
  if (elementNum.classList.contains('addition')) {
    operator();
    value += '+';
    calculatedValue.textContent = value;
  }
  if (elementNum.classList.contains('minus')) {
    operator();
    value += '-';
    calculatedValue.textContent = value;
  }
  if (elementNum.classList.contains('division')) {
    operator();
    if (value === '') {
      value = '';
    } else value += '/';
    calculatedValue.textContent = value;
  }

  if (elementNum.classList.contains('delete')) {
    value = value.slice(0, -1);
    calculatedValue.textContent = value;
  }

  if (elementNum.classList.contains('reset')) {
    value = '';
    calculatedValue.textContent = value;
  }

  if (value.slice(0, 1) === '0') {
    value = value.slice(1, 0);
  }

  if (elementNum.classList.contains('equal-sign')) {
    try {
      if (
        value.slice(-1) === '/' ||
        value.slice(-1) === '-' ||
        value.slice(-1) === '+' ||
        value.slice(-1) === '*'
      ) {
        value = value.slice(0, -1);
      }
      value = eval(value);
      calculatedValue.textContent = new Intl.NumberFormat('en-US').format(
        value
      );
      value = '';
    } catch (e) {
      calculatedValue.textContent = 'Invalid input!';
      value = '';
    }
  }
});
