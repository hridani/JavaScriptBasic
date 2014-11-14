function mixCase(str) {
    var strArray = [];
    for (var i = 0; i < str.length; i++) {
        if ((Math.floor(Math.random() * 2) + 1) % 2 == 0)
            strArray.push(str[i].toUpperCase());
        else
            strArray.push(str[i].toLowerCase());
    }
    return strArray.join('');
}

function replaseWord(string) {
    var reg = /<(\w+)>([\W\w]+)<\/\w+>/;
    var text = reg.exec(string);
    switch (text[1]) {
        case "mixcase":
            text[2] = mixCase(text[2]);
            break;
        case "upcase":
            text[2] = text[2].toUpperCase();
            break;
        case "lowcase":
            text[2] = text[2].toLowerCase();
            break;
        default:
    }
    return text[2];
}


function fixCasing(string) {
    var reg = /<\w+>([^<>]+)<\/\w+>/g;
    string = string.replace(reg, replaseWord);
    console.log(string);
}

fixCasing("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.");