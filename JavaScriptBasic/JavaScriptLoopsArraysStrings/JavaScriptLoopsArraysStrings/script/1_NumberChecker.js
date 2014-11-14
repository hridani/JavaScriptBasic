function printNumbers(number) {
    var result = [];
    var numb = 0;
    for (var i = 1; i <= number; i++) {
    
        if (i % 4 != 0 && i % 5 != 0) {
           
            result.push(i);
        }
    }
    if (result.length == 0) {
        result[0] = 'no';
    }
    var output = result.join(', ');
    console.log(output);
   
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);
