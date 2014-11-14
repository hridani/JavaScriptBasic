function solve(arr) {
    var n = Number(arr[0]);
    var number = Number(arr[1]);

    console.log(findNthDigit(n, number))
}
function findNthDigit(n, number) {
    var strNumber = number.toString().replace(/\D+/g, '');

    var pos = (strNumber.length - n);
    if (pos >= 0) {
        return strNumber[strNumber.length - n];
    }
    else
        return 'The number doesn\'t have ' + n + ' digits';

}
solve([1,6]);
solve([2,-55]);
solve([6, 923456]);
solve([3, 1451.78]);
solve([6, 888.88]);