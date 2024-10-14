let magician= ["Roger Lapin","David Copperfield","Paul Daniels"]

// create function

function show_magicians(magicians:string[]){
    magicians.forEach((mess)=>{
        console.log(`magician ${mess}.`);
    })
}

function make_great(magicians:string[]){
    magicians.map(name=>console.log(`The great magicians ${name}`) )
}

let copy_magicians_name = magician.slice(0,2)

console.log("Original array\n")
show_magicians(magician)
console.log("\nCopy starting 2 word of array\n")
make_great(copy_magicians_name)

// show_magicians();


