const prompt = require('prompt-sync')();
 



//     function RanQuestion3 (){
//         let num1 = Math.floor(Math.random()*999)+1
//         let num2 = Math.floor(Math.random()*999)+1
//         let num3 = Math.floor(Math.random()*99)+1
//         let num4 = Math.floor(Math.random()*99)+1
//         let opirators = Math.floor(Math.random()*4)+1
//         let question;
//         let answer
    
//         if (opirators=== 1){
//             question = Number(prompt(`${num1} + ${num2} = ?`))
//             answer = num1+num2
//         }
//         else if (opirators===2){
//              question = Number(prompt(`${num1} - ${num2} = ?`))
//              answer = num1-num2
//     }
//     else if (opirators===3){
//          question = Number(prompt(`${num3} * ${num4} = ?`))
//          answer = num3 * num4
    
//     }
//     else if (opirators === 4){
//          question = Number(prompt(`${num3} / ${num4} = ?`))
//          answer= num3/num4
//     }
     
//     else if (opirators===5){
//          question = Number(prompt(`${num3} % ${num4} = ?`))
//          answer = num3%num4
//     }
//     return {question, answer};
    
//     }

//     function RanQuestion2 (){
//         let num1 = Math.floor(Math.random()*99)+1
//         let num2 = Math.floor(Math.random()*99)+1
//         let num3 = Math.floor(Math.random()*9)+1
//         let num4 = Math.floor(Math.random()*9)+1
//         let opirators = Math.floor(Math.random()*4)+1
//         let question;
//         let answer
    
//         if (opirators=== 1){
//             question = Number(prompt(`${num1} + ${num2} = ?`))
//             answer = num1+num2
//         }
//         else if (opirators===2){
//              question = Number(prompt(`${num1} - ${num2} = ?`))
//              answer = num1-num2
//     }
//     else if (opirators===3){
//          question = Number(prompt(`${num3} * ${num4} = ?`))
//          answer = num3 * num4
    
//     }
//     else if (opirators === 4){
//          question = Number(prompt(`${num3} / ${num4} = ?`))
//          answer= num3/num4
//     }
//     return {question, answer};
//     }
    
    
// 12

// function RanQuestion (){
//     let num1 = Math.floor(Math.random()*10)+1
//     let num2 = Math.floor(Math.random()*10)+1
//     let opirators = Math.floor(Math.random()*2)+1
//     let question;
//     let answer

//     if (opirators=== 1){
//         question = Number(prompt(`${num1} + ${num2} = ?`))
//         answer = num1+num2
//     }
//     else if (opirators===2){
//          question = Number(prompt(`${num1} - ${num2} = ?`))
//          answer = num1-num2
// }


// return {question, answer};

// }



// function maxScore(){
//     var score = 0
//     for (let i=1; i<=20;i++){ 
//         let{question, answer} = RanQuestion()
//         if (question === answer){
//             score = score + 10
//             console.log(`correct! your score is: ${score}`)
//         }
//         else if (question!==answer){
//             score = score -5
//             console.log(`incorrect, your score is:${score}`)
//         }
        
//         else if (isNaN(answer)){
//             score= score
//             console.log(`skipped`)

//         }

//     }
//     console.log(`your final score is ${score}!`)
// }
// function maxScore2(){
//     var score = 0
//     for (let i=1; i<=20;i++){ 
//         let{question, answer} = RanQuestion2()
//         if (question === answer){
//             score = score + 10
//             console.log(`correct! your score is: ${score}`)
//         }
//         else if (question!==answer){
//             score = score -5
//             console.log(`incorrect, your score is:${score}`)
//         }
        
//         else if (isNaN(answer)){
//             score= score
//             console.log(`skipped`)

//         }

//     }
//     console.log(`your final score is ${score}!`)
// }

// function maxScore3(){
//     var score = 0
//     for (let i=1; i<=20;i++){ 
//         let{question, answer} = RanQuestion3()
//         if (question === answer){
//             score = score + 10
//             console.log(`correct! your score is: ${score}`)
//         }
//         else if (question!==answer){
//             score = score -5
//             console.log(`incorrect, your score is:${score}`)
//         }
        
//         else if (isNaN(answer)){
//             score= score
//             console.log(`skipped`)

//         }

//     }
//     console.log(`your final score is ${score}!`)
// }


// function Threeout(){

//     let lives= 3
//      score= 0
//     while(lives>0){ 
//         let {question, answer} =
//         RanQuestion()
        
//          if (question!==answer){
//         lives = lives -1
//         score = score - 5
//         console.log(`incorrect, your score is now ${score}, your chance(s)${lives}`)
//     }

//     }
// }
// function Threeout2(){

//     let lives= 3
//      score= 0
//     while(lives>0){ 
//         let {question, answer} =
//         RanQuestion2()
        
//          if (question!==answer){
//         lives = lives -1
//         score = score - 5
//         console.log(`incorrect, your score is now ${score}, your chance(s)${lives}`)
//     }

//     }
// }

// function Threeout3(){

//     let lives= 3
//      score= 0
//     while(lives>0){ 
//         let {question, answer} =
//         RanQuestion3()
        
//          if (question!==answer){
//         lives = lives -1
//         score = score - 5
//         console.log(`incorrect, your score is now ${score}, your chance(s)${lives}`)
//     }

//     }
// }


// function input(){
//     console.log('these are the modes\n\t1. for max score\n\t2. for Three out')
//     Userinput = Number(prompt(`choose a mode: `));

//         if (Userinput === 1){
    
//         console.log(`these are the levels\n\t1. easy level\n\t2. medium level\n\t3. hard level`)
//    Userinput = Number(prompt(`choose a level: `))
//     if (Userinput=== 1){
//         maxScore()
//     }
//     if (Userinput === 2){
//         maxScore2()
//     }
//     if (Userinput===3){
//         maxScore3()
//     }
//     }
//             if (Userinput=== 2){
//         console.log(`these are the levels\n\t1. easy level\n\t2. medium level\n\t3. hard level`)
//    Userinput = Number(prompt(`choose a level: `));
//    if (Userinput=== 1){
//     Threeout()
// }
// if (Userinput === 2){
//     Threeout2()
// }
// if (Userinput===3){
//     Threeout3()
// }
// }
//     }


// input()



// let name1 = "Maria"
// let name2 = "jeff"


let name = ["mike","jeff","john","maria","elly","maya"]

// console.log(name.length)

// for(let i=0; i<name.length;i++){
//     console.log(name[i])
// }

//  for(let i of name){
//     console.log(i)
// }

// name.push("jeremy") // endof array

// name.unshift("ken") //beggining of an array

// name.pop() //deletes the first

// name.shift() // deletes last item


//console.log(name)

console.log(name.indexOf("simon",0)) //search for item index number

if(name.indexOf === -1){
    
 name.push()
}