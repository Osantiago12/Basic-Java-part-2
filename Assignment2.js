const prompt = require('prompt-sync')();

// //Practice One
// let name = prompt("Please enter your name: \n")
// console.log("Hello "+name+"!")

// let fname = prompt("Please enter your first name: ")
// let lname = prompt("And your last name, please?: ")
// console.log("It is nice to meet you, "+fname+" "+lname)

// //Practice Two
// let fnum = Number(prompt("Please enter a number: "))
// let snum = Number(prompt("Please enter another number: "))
// console.log(`The sum is, ${fnum + snum} `)

//Side tangant
let nums = Number(prompt("Pick any number: "))
if(isNaN(nums)){
    console.log("That isn't a number")
}else{
    console.log(`Your number squared equals: ${nums*nums}`)
}