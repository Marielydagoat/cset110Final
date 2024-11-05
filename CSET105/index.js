const prompt = require('prompt-sync')();

// let x = [["mango", "apple"], ["kiwi", "orange"]]

// console.log(x[0][1])

//let x = "HI! How you doing?" //["H","I", ["!"]]

// console.log(x.length)

// for (let i = 0; i<x.length; i++){
//     console.log(x[i])
// }
// for(let i of x){
//     console.log(i)
// }

// console.log("coconuts".slice(0,4))

// console.log(x.split(" "))

// let words = x.split(" ")
// console.log(words)

// let fruit = ["mango", "apple", "kiwi"]
// console.log(fruit.join(" "))

// function max(...numbers){
//     let result = -Infinity
//     for (let number of numbers){
//         if (number > result){
//             result = number
//         }
//     }
//     return result
// } 

// let x = [ 4, 8 ,1 ,78, 45]
// console.log(max(98,...x,17))



// let num = (prompt("number you want to reverse:")); //reverse

// let reverse =  parseFloat(num.toString().split('').reverse().join(''));

// console.log(reverse)


// function customcap(x) { // for capital letters
  
//     let result = ""
//     for ( let i=0; i<x.length ;i++){
//         let charCode = x.charCodeAt(i) 
//         if(charCode >= 97 && charCode <= 122 ){
//             result = result + String.fromCharCode(charCode - 32)

           
//         }
//         else{
//             result = result+x[i]
//         }
     


//         }
//     return result

//   }

//   console.log(customcap("hello mike!"))

// function invertcase(x){ //invert function
//     let result = ""
//     for (let i of x){
//         if(i=== i.toLowerCase()){
//         result = result + i.toUpperCase() 
//         }
//         else {
//         result =  result +i.toLowerCase()
//     }

//     }
// return result
// }

// console.log(invertcase("BaNana"))



// let n = Number(prompt("how many numbers:"))

// for (let i = 1; i<= n; i++){
//  num = Number(prompt("enter your number:"));
// sum= num + i

// }
// console.log(sum)


// let sum = 0

// for (let i = 0; i < 5; i++) {
//     let num = Number(prompt("Enter a number: "))
//     sum += num
// }
// console.log(sum)


// let sum = 0 // practice 1
// let input = Number(prompt("how many numbers?"))
// for (let i = 0; i < input; i++) {
//     let num = Number(prompt("Enter a number: "))
//     sum += num
// }
// console.log(sum)

// let sum = 0 // practice 2

// let n = prompt("Enter a number: ")
// let a = 0
// let b = 1

// for(let i = 0; i < n; i++){
//     sum = a + b
//     a = b
//     b = sum
//     console.log(b)
// }



// function remove(){ // practice 3
//     let firstName = ["Pizza ", "Candy ", "Chips ", "Cake ", "Soda , "];
//     firstName.splice(4,1);
//     console.log(firstName)
//     }
//     remove()

// function add (){ //practice 4
//     let firstName = ["koala ", "bird ", "lion ", "zebra ", "frog, "];
//     firstName.splice(4,0,"bear")
//     console.log(firstName)
//     }
//     add()

// let number = parseInt(prompt("Enter how many grocery items you have: "));// practice 5
// let groceryList = []
// for(let i = 0; i < number; i++){
//     let item = prompt("Enter an item: ")
//     if(item == "quit"){
//         break
//     }
//     item = item.toLowerCase()
//     item = item.charAt(0).toUpperCase() + item.slice(1)
//     if(item == "0"){
//         console.log("Items have been added to your list")
//     }
//     else{
//         groceryList.push(item)
//     }

// }

// //Search for items in list. If Item is found print found else print not found.

// let search = prompt("Enter an item to search for: ")
// search = search.toLowerCase()
// search = search.charAt(0).toUpperCase() + search.slice(1)

// if(groceryList.includes(search)){
//     console.log("Found")
// }
// else{
//     console.log("Not Found")
// }

let groceryList = []; // practice 


while (true) {
    console.log("1. Grocery list");
    console.log("2. Add item");
    console.log("3. Search item");
    console.log("4. Remove item");
    console.log("5. Exit");


    let choice = prompt("Enter your choice: ");

if (choice == 1) {
let number = parseInt(prompt("Enter how many grocery items you have: "));
for(let i = 0; i < number; i++){
    let item = prompt("Enter an item: ")
    if(item == "quit"){
        break
    }
    item = item.toLowerCase()
    item = item.charAt(0).toUpperCase() + item.slice(1)
    if(item == "0"){
        console.log("Items have been added to your list")
    }
    else{
        groceryList.push(item)
    }
    console.log(groceryList.join("\n"))


}


}






//add more items to the list.
if (choice == 2) {
let item = prompt("Enter an item to add: ")
item = item.toLowerCase()
item = item.charAt(0).toUpperCase() + item.slice(1)
if(item == "0"){
    console.log("Items have been added to your list")
}
else if(groceryList.includes(item)){
    console.log("Item already exists")
}
else{
    groceryList.push(item)
}




}




//Search for items in list.
if (choice == 3) {
let search = prompt("Enter an item to search for: ")
search = search.toLowerCase()
search = search.charAt(0).toUpperCase() + search.slice(1)


if(search == "0"){
    console.log("Items have been added to your list")
}


else if(groceryList.includes(search)){
    console.log("Found")
}
else{
    console.log("Not Found")


}




}




//print list on each line
console.log(groceryList.join("\n"))


//remove items from list
if (choice == 4) {
let remove = prompt("Enter an item to remove: ")
remove = remove.toLowerCase()
remove = remove.charAt(0).toUpperCase() + remove.slice(1)


if(remove == "0"){
    console.log("Items have been added to your list")
}


else if(groceryList.includes(remove)){
    let index = groceryList.indexOf(remove)
    groceryList.splice(index, 1)
}


console.log(groceryList.join("\n"))


}






//exit program
if (choice == 5){
console.log("Goodbye")
break
}


else {
    console.log("Please select a valid option.")
}


}
