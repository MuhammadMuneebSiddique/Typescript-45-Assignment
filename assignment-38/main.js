// create a function with deflaut parameters
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Peshawar");
describe_city("Lahore");
describe_city("Riyadh", "Saudi Arabia");
