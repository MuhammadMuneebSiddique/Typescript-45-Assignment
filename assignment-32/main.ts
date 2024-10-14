// first create an array 
let current_user: string[] = ["UsER","user02","user03","user04","user05","user06","ADMIN"]
let new_user : string[] = ["user","user08","admin","USER04","User05","User06"]

// checking username
new_user.forEach((new_User)=>{
    if(current_user.some((current_User)=> current_User.toLowerCase() === new_User.toLowerCase())){
        console.log(`this username ${new_User} is already taken`)
    }
     else{
        console.log(`username ${new_User} is available`)
    }
})
