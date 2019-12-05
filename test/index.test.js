import Convert from '../src/index';

describe('Convert instance', () => {
    it('Should be an object', () => {
        const convert = new Convert();

        assert.isObject(convert);
    });
});

describe('Convert number in string', () => {
    it('Should be show Error', () => {
        const convert = new Convert();

        assert.throws(convert.convertToString, 'Введите число');
    });
    
    it('Should be convert 1 in string (one)', () => {
        const convert = new Convert();
        const num = 1;
        const expected = 'one';

        const actual = convert.convertToString(num);

        assert.deepEqual(actual, expected);
    });
    
    it('Should be convert 10 in string (ten)', () => {
        const convert = new Convert();
        const num = 10;
        const expected = 'ten';

        const actual = convert.convertToString(num);

        assert.deepEqual(actual, expected);
    });
});

describe('Convert string in number', () => {
    it('Should be show Error', () => {
        const convert = new Convert();

        assert.throws(convert.convertToNum, 'Введите слово');
    });
    
    it('Should be convert one in number (1)', () => {
        const convert = new Convert();
        const string = 'one';
        const expected = 1;

        const actual = convert.convertToNum(string);

        assert.deepEqual(actual, expected);
    });
    
    it('Should be convert ten in number (10)', () => {
        const convert = new Convert();
        const string = 'ten';
        const expected = 10;

        const actual = convert.convertToNum(string);

        assert.deepEqual(actual, expected);
    });
});
