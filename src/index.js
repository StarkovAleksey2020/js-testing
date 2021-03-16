'use strict';

import getNYDate from './modules/get-ny-date';

const output = document.querySelector('.output');

output.innerHTML = getNYDate().toUTCString();