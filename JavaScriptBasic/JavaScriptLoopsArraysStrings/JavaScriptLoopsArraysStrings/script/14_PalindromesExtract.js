function checkPalindroms(string) {
    var str = string.replace(/[^a-zA-z0-9]+/gi, '').toLowerCase();
    var result = (str == str.split('').reverse().join(''));
    return result
}

function findPalindromes(string) {
    //   var strArray = string.replace('.', ' ').replace(',', ' ');
    //   strArray=strArray.replace("  ",' ').split(" ");
    var strArray = string.split(/\W+/);
    var palindroms = [];
    for (var i = 0; i < strArray.length ; i++) {
        if (checkPalindroms(strArray[i]) == true) {
            palindroms.push(strArray[i]);

        }
    }
    console.log(palindroms.join(', '));
}

findPalindromes('There is a man, his name was Bob.');
