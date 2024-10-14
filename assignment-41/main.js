// create function
function show_magicians(magicians) {
    magicians.forEach(function (mess, number) {
        if (number === void 0) { number = 1; }
        console.log("Top ".concat(number++ + 1, " magician ").concat(mess));
    });
}
show_magicians(["'Roger Lapin'", "'David Copperfield'", "'Paul Daniels'"]);
