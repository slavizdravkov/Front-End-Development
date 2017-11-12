//Solution No1
function reverseNumbers1(array) {
    let revArray = array.reverse();

    for (let number of revArray) {
        console.log(number);
    }
}

//Solution No2
function reverseNumbers2(array) {
    let arrayLength = array.length;

    for (let i = arrayLength - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}