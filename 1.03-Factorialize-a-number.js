// Factorials are often represented with the shorthand notation n!

// Practice

let factorialize = (num) => {
    for(var product = 1; num>0; num--){
        product*=num
    }
    return product
}