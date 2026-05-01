//Arrow Function (ES6)

const greet = function (name1) {
     return `Hello,${name1}!`
}
console.log(greet("Promod"))

// if remove want to make a normal function to arrow function.
//Remove the keyword function, remove the keyword return,remove the curly braces, and use the =>

//Arow Function

const greet1 =  (name1) => `Hello,${name1}!`
console.log(greet1("Promod"));

//arrow funtion only generally works whenever you have a single line
const doubleIt = n => n*2;
console.log(doubleIt(10))

// No params - parens required
const getEnv = () => "Staging";
console.log(getEnv());

//Suppose we have a multi-line. Can we use arrow function everywhere
//Multi-line - needs curly braces + return

const getResult = (score) => {
    if(score >= 70) return "pass";
    return "fail";
}

console.log(getResult(80));
console.log(getResult(60));

