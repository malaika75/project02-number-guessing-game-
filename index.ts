#!/usr/bin/env node

import inquirer from "inquirer"

const randomnumber = Math.floor(Math.random()* 6 + 1)

const answer = await inquirer.prompt([
   {
        name :"usernumber",
        type : "number",
        message : "please guess a number between 1-6:",
        
    }
])
if (answer.usernumber === randomnumber){
    console.log("congratulations! you select a right number")
}else{
    console.log ("sorry you guess a wrong number")
}