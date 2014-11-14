function displayProperties() {
    var output = [];

    for (var property in document) {
        output.push(property);
    }
    output.sort();

    for (var property in output) {
        jsConsole.writeLine(output[property]);
    }
}

displayProperties();