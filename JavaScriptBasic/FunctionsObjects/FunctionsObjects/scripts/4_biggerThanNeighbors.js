function solve(arr) {
    var position = Number(arr[0]);
    var inputArr = arr[1];
    var res = biggerThanNeighbors(position, inputArr);
    console.log(res);

}
function biggerThanNeighbors(position, inputArr) {
    if (position == 0 || position == inputArr.lenght - 1)
        return "only one neighbor";
    if (position > inputArr.length - 1)
        return "invalid index";
    if (inputArr[position] > inputArr[position + 1] && inputArr[position] > inputArr[position - 1])
        return "bigger";
    else
        return "not bigger";
}

solve([2, [1, 2, 3, 3, 5]]);
solve([2, [1, 2, 5, 3, 4]]);
solve([5, [1, 2, 5, 3, 4]]);
solve([0, [1, 2, 5, 3, 4]]);
