function solve(arr) {
    var inputArr = [];
    var maxsum = 0;
    var maxSumNumber = 0;
    for (var i in arr) {

        inputArr[i] = arr[i];
        var isNumber = /^-?\d+$/.test(inputArr[i]);
        if (isNumber == false) {
            console.log("undefined");
            return;
        }

        var strNumber = inputArr[i].toString().replace(/\D+/g, '');
        var sum = 0;

        var numb = Number(strNumber);
        for (var j = 0; j < strNumber.length; j++) {

            sum = sum + numb % 10;
            numb = Math.floor(numb / 10);
        }
        if (sum >= maxsum) {
            maxsum = sum;
            maxSumNumber = inputArr[i];
        }
    }



    console.log(maxSumNumber);
}
solve([5, 10, 15, 111]);
solve([33, 44, -99, 0, 20]);
solve('hello');
solve([5, 3.3]);
