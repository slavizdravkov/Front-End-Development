function addRemoveElement(inputData) {
    let output = [];

    for (let command of inputData) {
        let tokens = command.split(" ");
        let commandName = tokens[0];
        let commandParam = Number(tokens[1]);

        switch (commandName) {
            case "add":
                output.push(commandParam);
                break;
            case "remove":
                if (output[commandParam] === undefined) {
                    break;
                } else {
                    output.splice(commandParam, 1);
                }
                break;
        }
    }

    console.log(output.join('\n'));
}