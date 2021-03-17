'use strict';

import getNYDate from './modules/get-ny-date';
import signLocal from './modules/sign-local';

const output = document.querySelector('.output');
const local = signLocal();
output.textContent = local;


//const output = document.querySelector('.output');
//output.innerHTML = getNYDate().toUTCString();