'use strict';

const elements = document.getElementsByClassName('population');
let sum = 0;
let avarage = 0;

for (const element of elements) {
  const value = element.textContent;

  const cleanedValue = value.replace(/[,\s\u00A0]/g, '');

  if (!isNaN(Number(cleanedValue))) {
    sum += Number(cleanedValue);
  }
}

avarage = sum / elements.length;

const calculateSum = document.querySelector('.total-population');

calculateSum.textContent = sum.toLocaleString('uk-UA');

const calcAv = document.querySelector('.average-population');

calcAv.textContent = avarage.toLocaleString('uk-UA');
