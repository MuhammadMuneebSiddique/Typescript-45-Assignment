// create an array
var animals = ["Camel", "Cat", "Lion"];
// message
animals.forEach(function (animal) {
    if (animal == "Camel") {
        console.log("CAMEL\nDomestic camels have been selectively bred over many year");
    }
    else if (animal == "Cat") {
        console.log("CAT\nCat loves circles and accompanies Peg on her adventures");
    }
    else if (animal == "Lion") {
        console.log("LION\nLions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey.");
    }
});
console.log("\nAny of these animals would make a great pet!");
