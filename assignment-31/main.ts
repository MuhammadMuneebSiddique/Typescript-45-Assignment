// create an array and store zero value
let username : string[] = ["munneeb"]

if(username.length === 0){ // No user
    console.log("We need to find some users!")
}else { // Greet message for users
    username.forEach((mes)=>{
        console.log(`Hello, ${mes} thank you for logging in`)
    })
}