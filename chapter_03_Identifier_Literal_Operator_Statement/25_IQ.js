console.log(0 == "") //true (both convert to 0)
console.log(0 === "") //false 
console.log(0 == "0") //true ("0" -> 0)
console.log(0 === "0") //false
console.log(0 == false) //true
console.log(0 === false) //false
console.log(null == undefined) //true
console.log(null === undefined) //false
console.log("\t\n" == 0) // true


var a = 0/0;
console.log(a) //NaN

var a1 = 0.0/0.0;
console.log(a1) //NaN

let a2;
console.log(a2); //undefined

let a3 = null;
console.log(a3); // null

let inputAge = "true";

if(inputAge == false)
{
    console.log("Age is empty/Invalid")
}
