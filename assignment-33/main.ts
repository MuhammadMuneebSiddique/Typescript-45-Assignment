// create an array 
let position : number[] = [1,2,3,4,5,6,7,8,9]

// print ordinal number for if else conditon
position.forEach((add)=>{
    if(add == 1){
        console.log(`1st`)
    }else if (add == 2){
        console.log(`2nd`)
    }else if (add == 3){
        console.log(`3rd`)
    }else if (add >= 4){
        console.log(`${add}th`)
    }
})