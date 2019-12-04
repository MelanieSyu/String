const upperCase = function () {
    let string = "";
    for (let i = 65; i < 91; i++) {
        string += `${String.fromCharCode(i)}`;
    }

    return string;
}

const lowerCase = function () {
    let string = "";
    for (let i = 97; i < 123; i++) {
        string += `${String.fromCharCode(i)}`;
    }

    return string;
}

const number = function () {
    let string = "";
    for (let i = 48; i < 58; i++) {
        string += `${String.fromCharCode(i)}`;
    }

    return string;
}

const russianLowerCase = function () {
    let string = "";
    for (let i = 224; i < 256; i++) {
        string += `${String.fromCharCode(i)}`;
    }

    return decode(string);
}

const decode = function(s){
    for(var a, b, i = -1, l = (s = s.split("")).length, o = String.fromCharCode, c = "charCodeAt"; ++i < l;
        ((a = s[i][c](0)) & 0x80) &&
        (s[i] = (a & 0xfc) == 0xc0 && ((b = s[i + 1][c](0)) & 0xc0) == 0x80 ?
        o(((a & 0x03) << 6) + (b & 0x3f)) : o(128), s[++i] = "")
    );
    return s.join("");
}

class Convert {

}

module.exports = Convert;