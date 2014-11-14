function compareChars() {
    var first=arguments[0];
    var second = arguments[1];
    
    if ((first.length == second.length) && (first.every(function (a, b) { return a === second[b]; })) ){
       console.log("Equal") ;
    }
    else{
        console.log("Not Equal") ;
    }

}


compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);

