let solve = lastDigit =>{
    let toString = lastDigit.toString();
    let theLastDigit = Number(toString[toString.length-1]); 
    return theLastDigit
}
console.log(solve(20443023));