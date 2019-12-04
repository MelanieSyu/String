const convertToString = function(num) {
    const numStrings = ['нуль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    let word = '';

    for( i = 0; i < numStrings.length; i++) {
        if(num === i) {
            word = numStrings[i];
        }
    }

    return word;
}


module.exports = convertToString; 