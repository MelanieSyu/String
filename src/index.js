class Convert {
    convertToString = num => {
        const numStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
        let word = '';
    
        if(!num) {
            throw new Error('Введите число');
        }
        for(let i = 0; i < numStrings.length; i++) {
            if(num === i) {
                word = numStrings[i];
            }
        }
        
        return word;
    };

    convertToNum = word => {
        const num = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12 };
        let number = 0;

        if(!word) {
            throw new Error('Введите слово');
        }
        for(let key in num) {
            if(word == key) {
                number = num[key];
            }
        }

        return number;
    }
}

export default Convert; 