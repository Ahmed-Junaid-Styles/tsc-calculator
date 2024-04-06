#! /usr/bin/env node

import inquirer from "inquirer";

const ans = await inquirer.prompt([
    {message: "Enter a number: ", type: "number" ,name: "first"},
    {message: "Enter another number: ", type: "number" ,name: "second"},
    {message: "Select one of the operator", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"]}
])

if(ans.operator == "Addition"){
    console.log(`The result is: ${ans.first + ans.second}`)
}
else if(ans.operator == "Subtraction"){
    console.log(`The result is: ${ans.first - ans.second}`)
}
else if(ans.operator == "Multiplication"){
    console.log(`The result is: ${ans.first * ans.second}`)
}
else if(ans.operator == "Division"){
    console.log(`The result is: ${ans.first / ans.second}`)
}
else{
    console.log(`Sorry!`)
}
