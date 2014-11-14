function solve(arr) {
    var text = arr[0].toString();
    var res = reverseWordsInString(text);
    console.log(res);
}
function reverseWordsInString(text) {
    var words = text.split(/\s+/);
    //var reverseWords = text.split("").reverse().join("");
    var reverseWords = [];

    words.forEach(function (w) {
        var reverseWord = '';
        for (var i = w.length - 1; i >= 0; i--)
            reverseWord += w[i];

        reverseWords.push(reverseWord);
    });

    return reverseWords.join(" ");
}
solve(["Hello, how are you."]);
solve(["Life is pretty good, isn't it?"]);