// create function

function show_magicians(magicians:string[]){
    magicians.forEach((mess,number=1)=>{
        console.log(`The great Top ${number++ + 1} magician ${mess}.`);
    })
    
}

show_magicians(["'Roger Lapin'","'David Copperfield'","'Paul Daniels'"])