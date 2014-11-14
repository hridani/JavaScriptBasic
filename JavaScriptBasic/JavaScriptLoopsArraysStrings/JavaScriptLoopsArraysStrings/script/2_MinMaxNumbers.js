function findMinAndMax(array) {
    array.sort(function (a,b){
        return a>b;
    });
    console.log("Min -> " + array[0]);
    console.log("Max -> " + array[array.length - 1]);
    console.log();
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);