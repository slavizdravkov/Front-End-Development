function productNumbers(numberOne, numberTwo, numberThree) {
    let numArray = [numberOne, numberTwo, numberThree];
    let negativeCount = 0;

    for (let number of numArray) {
        if (number === 0) {
            return 'Positive';
        }

        if (number < 0) {
            negativeCount++;
        }
    }

    if (negativeCount > 0 && negativeCount % 2 !== 0) {
        return 'Negative';
    }

    return 'Positive';
}