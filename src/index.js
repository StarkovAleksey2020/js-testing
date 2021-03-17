'use strict';

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


//const output = document.querySelector('.output');
//output.innerHTML = getNYDate().toUTCString();