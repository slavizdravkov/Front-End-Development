function keyValuePairs(inputLines) {
    let output = [];
    let keyToPrint = inputLines.pop();

    for (let line of inputLines) {
        let tokens = line.split(" ");
        let key = tokens[0];
        let value = tokens[1];

        output[key] = value;
    }

    if (output[keyToPrint] === undefined) {
        console.log('None');
    } else {
        console.log(output[keyToPrint]);
    }
}