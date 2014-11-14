function findMostFreqNum(array) {
    var hashTable = {};
    var maxpos = 0;
    var maxcount = 0;
    for (var i = 0; i < array.length ; i++) {
        if (hashTable.hasOwnProperty(array[i])) {
            hashTable[array[i]] = hashTable[array[i]] + 1;
        } else {
            hashTable[array[i]] = 1;
        }
    }
    for (var n in hashTable) {
        if (hashTable[n] > maxcount) {
            maxcount = hashTable[n];
            maxpos = n;
        }
    }
    console.log(maxpos + ' (' + maxcount + ' times)');

}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
