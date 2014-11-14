function changeSimvol(text, a, b) {
    var re = new RegExp(a, 'g'); 
    return text.replace(re,b);
}

function replaceSpaces(string) {
    var newtext = '';
    newtext=changeSimvol(string, ' ', '');
    console.log(newtext);
}

replaceSpaces("But you were living in another world tryin' to get your message through");