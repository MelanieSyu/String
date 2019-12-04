const Convert = require('../src/index');

describe('Convert instance', () => {
    it('Should be an object', () => {
        const obj = new Convert();

        assert.isObject(obj);
    });
});
