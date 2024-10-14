// create an array and store zero value
var username = ["munneeb"];
if (username.length === 0) {
    console.log("We need to find some users!");
}
else {
    username.forEach(function (mes) {
        console.log("Hello, ".concat(mes, " thank you for logging in"));
    });
}
