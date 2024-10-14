"use strict";
// create function
function sandwich(list) {
    if (list == "CLUB SANDWICH".toLowerCase() || list == "club sandwich".toUpperCase()) {
        let club_sandwich = {
            name: "Club Sandwich",
            price: 420,
        };
        console.log(club_sandwich);
    }
    else if (list == "normal sandwich".toLowerCase() || list == "normal sandwich".toUpperCase()) {
        let normal_sandwich = {
            name: "normal sandwich",
            price: 250,
        };
        console.log(normal_sandwich);
    }
    else if (list == "cheese sandwich".toLowerCase() || list == "cheese sandwich".toUpperCase()) {
        let cheese_sandwich = {
            name: "cheese sandwich",
            price: 340,
        };
        console.log(cheese_sandwich);
    }
    else {
        console.log("This sandwich is not makng this shop Sorry!!!");
    }
}
sandwich("CLUB SANDWICH");
