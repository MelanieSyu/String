import Convert from '../src/index';

describe('Convert instance', () => {
    it('Should be an object', () => {
        const convert = new Convert();

        assert.isObject(convert);
    });
});

describe('Convert number into string', () => {
    it('Should be show Error', () => {
        const convert = new Convert();

        assert.throws(convert.numberToText, 'Введите число');
    });
    
    it('Should be convert 1 in string (one)', () => {
        const convert = new Convert();
        const num = 1;
        const expected = 'one';

        const actual = convert.numberToText(num);

        assert.deepEqual(actual, expected);
    });
    
    it('Should be convert 20 in string (twenty)', () => {
        const convert = new Convert();
        const num = 20;
        const expected = 'twenty ';

        const actual = convert.numberToText(num);

        assert.deepEqual(actual, expected);
    });
        
    it('Should be convert 3000 in string (thirty thousand)', () => {
        const convert = new Convert();
        const num = 3000;
        const expected = 'three thousand ';

        const actual = convert.numberToText(num);

        assert.deepEqual(actual, expected);
    });
            
    it('Should be convert 356 in string (thirty hundred fifty six)', () => {
        const convert = new Convert();
        const num = 356;
        const expected = 'three hundred fifty six';

        const actual = convert.numberToText(num);

        assert.deepEqual(actual, expected);
    });
});


// describe('Convert string into number', () => {
//     it('Should be show Error', () => {
//         const convert = new Convert();

//         assert.throws(convert.numberToText, 'Введите число');
//     });
    
//     it('Should be convert one into number (1)', () => {
//         const convert = new Convert();
//         const text = 'one';
//         const expected = 1;

//         const actual = convert.textToNumber(text);

//         assert.deepEqual(actual, expected);
//     });
    
//     it('Should be convert twenty into number (20)', () => {
//         const convert = new Convert();
//         const text = 'twenty ';
//         const expected = 20;

//         const actual = convert.textToNumber(text);

//         assert.deepEqual(actual, expected);
//     });
        
//     it('Should be convert three thousand into number (3000)', () => {
//         const convert = new Convert();
//         const text = 'three thousand ';
//         const expected = 3000;

//         const actual = convert.textToNumber(text);

//         assert.deepEqual(actual, expected);
//     });
            
//     it('Should be convert three hundred fifty six into number (356)', () => {
//         const convert = new Convert();
//         const text = 'three hundred fifty six';
//         const expected = 356;

//         const actual = convert.textToNumber(text);

//         assert.deepEqual(actual, expected);
//     });
// });