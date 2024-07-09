#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGray.bold.blackBright("Welcome to TypeScript Quiz Exam"));
const questions_Answer = {
    Q1: "Q1: What is TypeScript?",
    A1: "A superset of JavaScript",
    Q2: "Q2: TypeScript files use the .ts file extension.",
    A2: "True",
    Q3: "Q3: Which of the following is a correct way to define a variable in TypeScript with a type?",
    A3: "let name: string = 'John'",
    Q4: "Q4: What command is used to compile TypeScript code into JavaScript?",
    A4: "tsc",
    Q5: "Q5: How do you define an interface in TypeScript?",
    A5: "interface Person { name: string; age: number; }",
    Q6: "Q6: Which of the following is a correct way to write a function in TypeScript?",
    A6: "function greet(name: string): string { return 'Hello ' + name; }",
    Q7: "Q7: What is a union type in TypeScript?",
    A7: "A type that can be one of several types",
    Q8: "Q8: How do you create a read-only property in an interface?",
    A8: "interface Person { readonly name: string; }",
    Q9: "Q9: How do you install TypeScript globally using npm?",
    A9: "npm install -g typescript",
    Q10: "Q10: How do you specify the target ECMAScript version in a tsconfig.json file?",
    A10: "Both 1 and 3"
};
let quiz_Answer = await inquirer.prompt([
    {
        name: "Answer1",
        type: "rawlist",
        message: questions_Answer.Q1,
        choices: [
            "A version of Java",
            "A superset of JavaScript",
            "A CSS framework",
            "A backend language"
        ],
    },
    {
        name: "Answer2",
        type: "rawlist",
        message: questions_Answer.Q2,
        choices: [
            "True",
            "False"
        ],
    },
    {
        name: "Answer3",
        type: "rawlist",
        message: questions_Answer.Q3,
        choices: [
            "let name: string = 'John'",
            "let name = 'John'",
            "let name: 'John'",
            "name: string = 'John'"
        ],
    },
    {
        name: "Answer4",
        type: "rawlist",
        message: questions_Answer.Q4,
        choices: [
            "compile",
            "ts",
            "tsc",
            "ts-compile"
        ],
    },
    {
        name: "Answer5",
        type: "rawlist",
        message: questions_Answer.Q5,
        choices: [
            "type Person = { name: string; age: number; }",
            "class Person { name: string; age: number; }",
            "interface Person { name: string; age: number; }",
            "function Person(name: string, age: number) { }"
        ],
    },
    {
        name: "Answer6",
        type: "rawlist",
        message: questions_Answer.Q6,
        choices: [
            "function greet(name: string) { return 'Hello ' + name; }",
            "function greet(name: string): string { return 'Hello ' + name; }",
            "function greet(name) { return 'Hello ' + name; }",
            "function greet(name: any): string { return 'Hello ' + name; }"
        ],
    },
    {
        name: "Answer7",
        type: "rawlist",
        message: questions_Answer.Q7,
        choices: [
            "A type that can only be a string or number",
            "A type that can be one of several types",
            "A type that combines properties of multiple types",
            "A type used for interfaces"
        ],
    },
    {
        name: "Answer8",
        type: "rawlist",
        message: questions_Answer.Q8,
        choices: [
            "interface Person { name: string; readonly property; }",
            "interface Person { readonly name: string; }",
            "interface Person { name: readonly string; }",
            "interface Person { name: string; readonly; }"
        ],
    },
    {
        name: "Answer9",
        type: "rawlist",
        message: questions_Answer.Q9,
        choices: [
            "npm install typescript",
            "npm install -g typescript",
            "npm global add typescript",
            "npm install -global typescript"
        ],
    },
    {
        name: "Answer10",
        type: "rawlist",
        message: questions_Answer.Q10,
        choices: [
            "'target': 'es5'",
            "'ecmaTarget': 'es5'",
            "'jsTarget': 'es5'",
            "Both 1 and 3"
        ],
    },
    {
        name: "seeResult",
        type: "confirm",
        message: "Do you want to see your quiz result?",
        default: "false"
    }
]);
let score = 0;
while (quiz_Answer.seeResult) {
    if (quiz_Answer.Answer1 === "A superset of JavaScript") {
        score += 5;
        console.log('1)', chalk.blueBright.bold("correct!"));
    }
    else {
        console.log('1)', chalk.redBright.bold("wrong!"), chalk.bold(`right answer is "${chalk.yellowBright(questions_Answer.A1)}"`));
    }
    if (quiz_Answer.Answer2 === "True") {
        score += 5;
        console.log('2)', chalk.blueBright.bold("correct!"));
    }
    else {
        console.log('2)', chalk.redBright.bold("wrong!"), chalk.bold(`right answer is "${chalk.yellowBright(questions_Answer.A2)}"`));
    }
    if (quiz_Answer.Answer3 === "let name: string = 'John'") {
        score += 5;
        console.log('3)', chalk.blueBright.bold("correct!"));
    }
    else {
        console.log('3)', chalk.redBright.bold("wrong!"), chalk.bold(`right answer is "${chalk.yellowBright(questions_Answer.A3)}"`));
    }
    if (quiz_Answer.Answer4 === "tsc") {
        score += 5;
        console.log('4)', chalk.blueBright.bold("correct!"));
    }
    else {
        console.log('4)', chalk.redBright.bold("wrong!"), chalk.bold(`right answer is "${chalk.yellowBright(questions_Answer.A4)}"`));
    }
    if (quiz_Answer.Answer5 === "interface Person { name: string; age: number; }") {
        score += 5;
        console.log('5)', chalk.blueBright.bold("correct!"));
    }
    else {
        console.log('5)', chalk.redBright.bold("wrong!"), chalk.bold(`right answer is "${chalk.yellowBright(questions_Answer.A5)}"`));
    }
    if (quiz_Answer.Answer6 === "function greet(name: string): string { return 'Hello ' + name; }") {
        score += 5;
        console.log('6)', chalk.blueBright.bold("correct!"));
    }
    else {
        console.log('6)', chalk.redBright.bold("wrong!"), chalk.bold(`right answer is "${chalk.yellowBright(questions_Answer.A6)}"`));
    }
    if (quiz_Answer.Answer7 === "A type that can be one of several types") {
        score += 5;
        console.log('7)', chalk.blueBright.bold("correct!"));
    }
    else {
        console.log('7)', chalk.redBright.bold("wrong!"), chalk.bold(`right answer is "${chalk.yellowBright(questions_Answer.A7)}"`));
    }
    if (quiz_Answer.Answer8 === "interface Person { readonly name: string; }") {
        score += 5;
        console.log('8)', chalk.blueBright.bold("correct!"));
    }
    else {
        console.log('8)', chalk.redBright.bold("wrong!"), chalk.bold(`right answer is "${chalk.yellowBright(questions_Answer.A8)}"`));
    }
    if (quiz_Answer.Answer9 === "npm install -g typescript") {
        score += 5;
        console.log('9)', chalk.blueBright.bold("correct!"));
    }
    else {
        console.log('9)', chalk.redBright.bold("wrong!"), chalk.bold(`right answer is "${chalk.yellowBright(questions_Answer.A9)}"`));
    }
    if (quiz_Answer.Answer10 === "Both 1 and 3") {
        score += 5;
        console.log('10)', chalk.blueBright.bold("correct!"));
    }
    else {
        console.log('10)', chalk.redBright.bold("wrong!"), chalk.bold(`right answer is "${chalk.yellowBright(questions_Answer.A10)}"`));
    }
    quiz_Answer = quiz_Answer.seeResult;
    console.log(chalk.bold.bgCyanBright.underline.italic(`Your Score is ${chalk.blackBright(score / 50 * 100, '%')}`));
}
