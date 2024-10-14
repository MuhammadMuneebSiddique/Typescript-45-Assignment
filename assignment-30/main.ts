// create an array to store usernames
let loginUser :  string[] = ["User01","User02","User03","Admin","User04","User04",]

// Greeting messages
loginUser.forEach((username)=>{
    if(username === "Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${username} thank you for logging in again`)
    }
})
