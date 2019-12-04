const upperCase = function () {
    let string = "";
    for (let i = 65; i < 91; i++) {
        string += String.fromCharCode(i);
    }

    return string;
}

const lowerCase = function () {
    let string = "";
    for (let i = 97; i < 123; i++) {
        string += String.fromCharCode(i);
    }

    return string;
}

const number = function () {
    let string = "";
    for (let i = 48; i < 58; i++) {
        string += String.fromCharCode(i);
    }

    return string;
}

const russianLowerCase = function () {
    let string = "";
    for (let i = 1072; i < 1104; i++) {
        string += String.fromCharCode(i);
    }
    console.log(string);
    
    return string;
}
