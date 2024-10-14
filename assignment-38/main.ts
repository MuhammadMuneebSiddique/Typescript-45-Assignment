// create a function with deflaut parameters

function describe_city(city:string,country="Pakistan"){
    console.log(`${city} is in ${country}.`)
}

describe_city("Peshawar")
describe_city("Lahore")
describe_city("Riyadh","Saudi Arabia")

