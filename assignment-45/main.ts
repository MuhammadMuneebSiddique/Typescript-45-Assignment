// create function

function car_about(manufacture:string ,model:string ,...addmoreDetails:string[]){
    let car = {manufacture,model}
    addmoreDetails.map(option => {
        let [key,value] = option.split(":")
        car [key.trim()] = value.trim()
    });

    console.log(car);
}

car_about("Toyota","Corolla","colour:silver","Sunroof:true");
car_about("Toyota","Supra","colour:silver");