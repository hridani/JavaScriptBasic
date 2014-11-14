function findMaxSequence(array) {
    var count = 1;
    var max = 1;
    var startpos = 0;
    var res = "no";
    for (var i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
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
            startpos = i - count + 1;
        }

    }
    if (max > 1)
        res = array.slice(startpos, startpos + max);

    console.log(res);
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);