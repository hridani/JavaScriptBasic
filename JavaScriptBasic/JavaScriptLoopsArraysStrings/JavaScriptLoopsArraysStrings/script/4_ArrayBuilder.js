function createArray(numbArray) {
    var newArray = new Array(numbArray);
    for (var i = 0; i < newArray.length ; i++) {
        newArray[i] = i * 5;
    }
    newArray.join(",");
    return newArray;
}

console.log(createArray(20));