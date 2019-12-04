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
}

export default Convert; 