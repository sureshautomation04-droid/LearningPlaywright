// var, let, const

// var - Function Scoped

/* var a = 10; //Global Scope
console.log(a);

//Defination of the function
function printHello(){
    console.log('Hello TestingAcademy')
    var a = 20; // Local Scope
    console.log(a)

    if(true){
        var a = 30;
        console.log(a)
    }
    console.log(a)
}
console.log(a)

//calling of the function
printHello();  */

/* var also allows re-declaration
var a =10;
var a =20;  // no error, re-declaration is allowed
console.log(a) // 20 */


//let - Block Scoped

let b = 40; //Global Scope
console.log(b)

//Defination of the function
function printHello(){
    console.log('Hello The Testing');
    let b = 50; // Local Scope
    console.log(b); // 50

    if(true){
        let b = 60;
        console.log(b) // 60
    }

    console.log(b) //50
}

console.log("let ->",b)  // 40


//Calling of the function
printHello();


// let does not allow re-declaration in the same scope
//let b = 70; // Error: Identifier 'b' has already been declared
//  let a = 10;
//  let a = 10;

let a = 10;
 a = 20;
 console.log(a)

// var nn = "Suresh";
// let nn =  'SureshA' //Error Identifier 'nn' has already been declared

const pi = 3.14 //Constant variable
console.log(pi)

pi = 3.14567; //Error: Assignment to constant variable
