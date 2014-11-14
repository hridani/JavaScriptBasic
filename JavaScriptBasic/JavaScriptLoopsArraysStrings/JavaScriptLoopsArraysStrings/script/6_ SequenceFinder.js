function findMaxSequence(array) {
    var count = 1;
    var max = 1;
    var startpos = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            count++;
        } else {
            if (count >= max) {
                max = count;
                startpos = i - count;
            }
            count = 1;
        }
        if (i == (array.length - 1) && count >= max) {
            max = count;
            startpos = i - count+1;
        }
    }
    var res = array.slice(startpos, startpos + max);
    console.log(res);
}
findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);