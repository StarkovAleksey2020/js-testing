const assert = require('chai').assert;
const getNYDate = require('./src/modules/get-ny-date');
const createLocal = require('./src/modules/create-local');

describe('Функция возвращает последний день года в GMT', () => {
    it('Должна вернуться дата в формате : Fri, 31 Dec 2021 23:59:59 GMT', () => {
        assert.equal(getNYDate(), 'Fri, 31 Dec 2021 23:59:59 GMT');
    });
});

describe('Функция возвращает локаль', () => {
    it('Должна вернуться локаль из списка RU, EN, DE', () => {
        assert.include(['RU', 'EN', 'DE'], createLocal('RU'), 'createLocal answer in local array');
    });
    it('Должна вернуть RU', () => {
        assert.equal(createLocal(), 'RU');
    });
    it('Должна вернуть RU', () => {
        assert.equal(createLocal('DE'), 'DE');
    });
});
