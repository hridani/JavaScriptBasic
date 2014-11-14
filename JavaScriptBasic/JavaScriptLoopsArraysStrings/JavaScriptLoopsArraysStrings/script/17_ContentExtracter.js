function extractContent(input) {
    var string = input.value.toString();
    var reg = />(\w*)<\//g;
    var text = '';
    var word = '';
    while ((word = reg.exec(string)) != null) {
        text = text + word[1];
    }

    console.log(text);
    document.getElementById("result").innerHTML = text;
}
extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>");