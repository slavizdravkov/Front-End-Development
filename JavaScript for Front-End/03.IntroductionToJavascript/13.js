function storingObjects(inputLines) {
    let students = [];

    for (let line of inputLines) {
        let tokens = line.split(" -> ");
        [name, age, grade] = tokens;
        let student = {name, age, grade};

        students.push(student);
    }

    for (let student of students) {
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grade: ${student.grade}`);
        console.log();
    }
}
