function multipleOrDivide(array) {
    [numberOne, numberTwo] = array.map(Number);

    if (numberOne <= numberTwo) {
        return numberOne * numberTwo;
    }

    return numberOne / numberTwo;
}
