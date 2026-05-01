const greet = function (name){
    return `Hello,${name}!`
}

console.log(greet('Bob'))


//Type 4 Function
function greet1(name1) {
    return `Hello,${name1}!`
}

console.log(greet1('Bob'))

//Function as Expression
const greet2 = function(name1){
    return `Hello,${name1}!`
}

console.log(greet2('Bob'))