const prompt = require('prompt-sync')();

// let arr = [1,2,3,4,5,6]

// // let arr1= arr.map(age)

// let arr1 = arr.filter(age)

// function age (x){
//     if (x>3)
//         return x
// }

// console.log(arr1)


// let fruit = ["banana", " apple", "orange", "mango"]
// console.log(fruit.sort()) // alph order
// console.log(fruit.reverse()) // reverse order

// const points = [40, 100, 1, 5, 25, 10]
// console.log(points.sort(num))

// function num(a, b){
//         a-b
// }  

// let arr = new Array (3)  // to make an array with length but empty
// console.log(arr)
// // console.log(arr.fill(10))
// console.log(arr.length)

// let letters = new Set()// create a set
// console.log(letters)

// letters.add("a")
// letters.add("b")
// letters.add("c")
// console.log(letters)
// // to add to a set 
// let arr = Array.from(letters) //coverts a set to an array
// console.log(arr)


// let fruits = new Map([["apple", 500], ["banana", 200], ["orange", 200]])

// fruits.set("kiwi", 200)// adds to map
// fruits.set("apple",600) // updates the value because its already there

// console.log(fruits.get("apple")) // tells you the value
// //fruits.size to find the length

// console.log(fruits.has("pineapple")) // true or false statement
// fruits.clear() //clears the map
// console.log( fruits)

// let arr = [1,2,4,5,10,6,3]
// let arr1 = arr.filter(removeEven)

// function removeEven(x){
//     if(x % 2=== 0){
//         arr.slice(x)
//     }
//     else{
//         return x
//     }

// }

// console.log(arr1)


// let arr = [1,2, 2, 4, 5, 10, 6,3, 3, 3] // NOT DONEE
// let arr1 = arr.filter(dupe)

// function dupe(x){

// // let x = new Set(x)
// // x = Array.from(arr)

// // return x

// let remove = new Set(x);

// return Array.from(remove);
// }


// let arr = [1,2, 2, 4, 5, 10, 6,3, 3, 3]

// console.log(dupe(arr))




//  let arr = new Map([[5], [2], [9]])

// function num(x){

//     console.log(arr.has(x))
// }

//console.log(num(9))


function NumToChar(arr){
  arr.toString();
  x = String.fromCharCode(arr)
  return x
}



console.log(NumToChar(116))