const assert = require('chai').assert;
const getNYDate = require('./src/modules/get-ny-date');

describe('Функция возвращает последний день года в GMT', () => {
    it('Должна вернуться дата в формате : Fri, 31 Dec 2021 23:59:59 GMT', () => {
        assert.equal(getNYDate(), 'Fri, 31 Dec 2021 23:59:59 GMT');
        //assert(getNYDate() === 'Fri, 31 Dec 2021 23:59:59 GMT');
    });
});
