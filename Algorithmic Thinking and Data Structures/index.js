const readline = require('readline');

// Setting up areadline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to capitalize the first letter of each word
function capitalizeWords(input) {
    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// This Askss the user for input
rl.question("Enter a sentence: ", function(sentence) {
    const result = capitalizeWords(sentence);
    console.log("Capitalized Sentence: ", result);
    rl.close();
});
