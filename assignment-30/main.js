// create an array to store usernames
var loginUser = ["User01", "User02", "User03", "Admin", "User04", "User04",];
// Greeting messages
loginUser.forEach(function (username) {
    if (username === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, " thank you for logging in again"));
    }
});
