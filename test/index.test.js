const Convert = require('../src/index');

describe('Convert instance', () => {
    it('Should be an object', () => {
        const obj = new Convert();

        assert.isObject(obj);
    });
});

describe('Convert instance', () => {
    it('Should be an object', () => {
        const obj = new Convert();

        const num = 1;
        const actual = convertToString(num);
        const expected = 'один';

        assert.deepEqual(actual, expected);
        
    });
});
