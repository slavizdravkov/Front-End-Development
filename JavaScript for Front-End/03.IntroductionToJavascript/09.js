function setValues(inputArray) {
    let arrayLength = Number(inputArray.shift());
    let outputArray = [];

    for (let element of inputArray) {
        let elementAsArray = element.split(" - ");
        let key = Number(elementAsArray[0]);
        let value = elementAsArray[1];

        outputArray[key] = value;
    }

    for (let i = 0; i < arrayLength; i++) {
        if (outputArray[i] === undefined) {
            console.log(0);
        } else {
            console.log(outputArray[i]);
        }
    }
}