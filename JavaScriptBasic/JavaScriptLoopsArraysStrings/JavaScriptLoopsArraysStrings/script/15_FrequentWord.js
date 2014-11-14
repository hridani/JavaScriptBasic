function sortObj(arr) {
    var alertSort = "";
    var sortedKeys = new Array();
    var sortedObj = {};
    for (var i in arr) {
        sortedKeys.push(i);
    }
    sortedKeys.sort();
    for (var i in sortedKeys) {
        sortedObj[sortedKeys[i]] = arr[sortedKeys[i]];
        alertSort += sortedKeys[i] + " -> " + arr[sortedKeys[i]] + " times\n";
    }
    console.log(alertSort);
    return sortedObj;

}

function findMostFreqWord(string) {
    var strArray = string.toLowerCase().split(/\W+/);
    var hashTable = {};
    var maxFreqWords = {};
    var maxNumb = 0;
    for (var i = 0; i < strArray.length ; i++) {
        if (hashTable.hasOwnProperty(strArray[i])) {
            hashTable[strArray[i]] = hashTable[strArray[i]] + 1;
            if (hashTable[strArray[i]] > maxNumb) {
                maxNumb = hashTable[strArray[i]];
            }
        } else {
            hashTable[strArray[i]] = 1;
        }
    }
    for (var i in hashTable) {
        if (hashTable[i] == maxNumb) {
            maxFreqWords[i] = maxNumb;
        }

    }
    sortObj(maxFreqWords);
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
