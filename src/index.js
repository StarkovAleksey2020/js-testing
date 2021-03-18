'use strict';

import './index.html';
import './css/style.css';
import './scss/style.scss';

import imageCottage from './img/cottage.jpeg';

import getNYDate from './modules/get-ny-date';
import signLocal from './modules/sign-local';
import getCookie from './modules/get-cookie';

const output = document.querySelector('.lang');

let lang = getCookie('local');
console.log('lang: ', lang);

if (!lang) {
    lang = signLocal();
}
output.textContent = lang;

const imageBlock = document.createElement('div');
imageBlock.innerHTML = `<img src=${imageCottage} alt='Image: cottage' width=200>`;
output.appendChild(imageBlock);


//const output = document.querySelector('.output');
//output.innerHTML = getNYDate().toUTCString();