// create a function 
function makeShirt(size, message) {
    if (message === void 0) { message = "'I Love Typescript'"; }
    console.log("Create a ".concat(size, " size sleek hoodie with the phrase ").concat(message, " boldly printed on the front\n"));
}
makeShirt("Medium");
makeShirt("Large", "'Debugging is My Superpower'");
