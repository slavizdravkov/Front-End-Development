function parseJson(inputLines) {
    for (let line of inputLines) {
        let obj = JSON.parse(line);
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Grade: ${obj.date}`);
    }
}