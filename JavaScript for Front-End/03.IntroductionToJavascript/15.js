function jsonToObj(inputArray) {
    let obj = {};

    for (let line of inputArray) {
        let tokens = line.split(" -> ");
        let key = tokens[0];
        let value = tokens[1];

        obj[key] = value;
    }

    let str = JSON.stringify(obj);
    console.log(str);
}