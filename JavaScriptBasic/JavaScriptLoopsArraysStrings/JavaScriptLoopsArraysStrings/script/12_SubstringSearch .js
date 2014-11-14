var findCountWord = function (str, a) {
    var s1 = str.split(a);
    return s1.length - 1;
}

function countSubstringOccur(arr) {
    var isClean = 0;
    var keyword = arr[0];
    var text = arr[1];
    isClean = findCountWord(text.toLowerCase(), keyword.toLowerCase());
    return isClean;

}

console.log(countSubstringOccur(['in', "We are living in a yellow submarine. We don'thave anything else.Insidethe submarine is very tight.So we are drinking all the day.We will move out of it in 5 days."]));
console.log(countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']));
console.log(countSubstringOccur(['but', "But you were living in another world tryin' to get your message through."]));
