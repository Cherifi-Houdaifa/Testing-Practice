function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
}
function reverseString(str) {
    return str.split("").reverse().join().replaceAll(",", "");
}

class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    divide(a, b) {
        return a / b;
    }
    multiply(a, b) {
        return a * b;
    }
}

function caesarCipher(str, shift) {
    let finalStr = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!isAlphabet(char)) {
            finalStr += char;
        } else {
            finalStr += shiftChar(char, shift);
        }
    }
    return finalStr;
}
function isAlphabet(char) {
    return char.toUpperCase() != char.toLowerCase();
}
function shiftChar(char, shift) {
    let charCode = char.charCodeAt(0) + shift;
    if (char === char.toUpperCase()) {
        // upper
        if (charCode < 65) {
            charCode += 26;
        } else if (charCode > 90) {
            charCode -= 26;
        }
    } else if (char === char.toUpperCase()) {
        // lower
        if (charCode < 97) {
            charCode += 26;
        } else if (charCode > 122) {
            charCode -= 26;
        }
    }
    return String.fromCharCode(charCode);
}

function analyzeArray(arr) {
    return {
        average: (arr.reduce((prev, curr) => prev + curr, 0)) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    }
}

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
