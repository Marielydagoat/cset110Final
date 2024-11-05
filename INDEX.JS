const prompt = require('prompt-sync')();
console.log("Please select an option -\n\tPress 1 to Add\n\tPress 2 to Subtract\n\tPress 3 to Multiply\n\tPress 4 to Divide\n\tPress 5 to Quit")

while(true){
  let userInput = prompt("Please choose an option:")
  if(userInput==="1"){
    console.log("add")
  }
  else if(userInput==="2"){
    console.log("subtract")
  }
  else if(userInput==="3"){
    console.log("multiply")
  }
  else if(userInput==="4"){
    console.log("divide")
  }else if(userInput==="5"){
    console.log("quit")
    break
  }
  else {
    console.log("Please select a valid option")
  }
}