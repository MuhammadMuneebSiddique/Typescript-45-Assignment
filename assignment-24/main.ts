// Conditional tests

// Question number 01
let booksStock : number = 50;
let purchaseBook : number = 20;
let available = purchaseBook < booksStock

// condition 
if (available){
    ("Book Purachse Successfully")
}else{
    ("Books out of stock")
}
// What the conditonal will be printed ?

// my result
console.log(`01: The Answer is ("Book Purachse Successfully")`);

console.log(available);


// Qustion number 02
let names : string = "muneeb"
let lowercase = names.toLowerCase()
// What te case of the variable value ? 

// my result
console.log("02: The Answer is muneeb");

console.log(names == "muneeb");


// Question number 03
let person : string [] = ["Muneeb","Ablaj","Zawyar",]
person.push("Usman")
// What the array value will be printed ?

// my result
let Answer = [ 'Usman','Muneeb', 'Ablaj', 'Zawyar' ]

console.log("03: The Answer is [ 'Usman','Muneeb', 'Ablaj', 'Zawyar' ]")

console.log(person == Answer)


// Question number 04
let a : number = 4;
let b : number = 7;
let add = a += b 
// What the answer is that code ?

// my result
console.log("04: The Answer is 11");

console.log(a == 11);


// Question number 05
let value : number = 4
let more = value++
more = ++value
// What the value of variable is printed ? 

// my result  
console.log("05: The Answer is 6 ");

console.log(more == 6);


// Question number 06
let sentence : string = "Today i learn Typescript"
let inshortsent = sentence.substring(6)
// What the variable value is printed in console ? 

// my result
console.log("06: The Answer is i learn Typescript");

console.log(inshortsent == "i learn Typescript");


// Question number 07
let line :  string = "Hello! Subhan how are you"
let inshort = line.slice(0,13)
// What the sentence is printed in console ?

// my result
console.log("07: The Answer is Subhan how are you");

console.log(inshort == "Subhan how are you");


// Question number 08
let human : string = "Muneeb"
// What the type of variable ?

// my result
console.log("08: The Answer is type STRING");

console.log(typeof human == "string");


// Question number 09
let people :  string[] = ["muneeb","ablaj","zawyar"]

let res = people.some((nam)=>{return nam = "muneeb" })
// what is the value of array?

// my result
console.log(`09: The Answer is ["muneeb","ablaj","zawyar"]`)

console.log(res)


// Question number 10
let place : string[] = ["Pakistan","India","Bangladesh","Iran"]

let response = place.every((check)=> check == check.toUpperCase())
// what is the answer of following question?


// my result
console.log("10: The Anwser is "); console.log(response);

