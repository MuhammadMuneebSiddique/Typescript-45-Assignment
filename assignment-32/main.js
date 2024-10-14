// first create an array 
var current_user = ["UsER", "user02", "user03", "user04", "user05", "user06", "ADMIN"];
var new_user = ["user", "user08", "admin", "USER04", "User05", "User06"];
// checking username
new_user.forEach(function (new_User) {
    if (current_user.some(function (current_User) { return current_User.toUpperCase() === new_User.toUpperCase(); })) {
        console.log("this username ".concat(new_User, " is already taken"));
    }
    else {
        console.log("username ".concat(new_User, " is available"));
    }
});
