const snakeToCamel = str => str.toLowerCase().replace(/(_\w)/g, match => match.toUpperCase().substr(1))

// snakeToCamel("HELLO_world") === "helloWorld"
