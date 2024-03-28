#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to Irtiza-Hassan - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "Number",
        message: "Guess and enter any number (Number limit from 1 to 5);"
    },
]);
if (answer.userGuessednumber === randomNumber) {
    console.log("Congratulation ! You guess a correct number");
}
else {
    console.log("Sorry ! You guess a wrong number");
}
