var numberOfBrackets = function (str) {
    var count = 0;
    var i = 0;
    do {
        if (str[i] === '(') {
            count++;
        }
        if (str[i] == ')') {
            count--;
        }
        i++;
    } while (i < str.length && count >= 0);
    if (count == 0)
        return true;
    else
        return false;
}

function checkBrackets(string) {
    var isClean = 'correct';
    if (numberOfBrackets(string) != true) {
        isClean = 'incorrect';
    }
    return isClean;
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ( )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));