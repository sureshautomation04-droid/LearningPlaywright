let a = "Suresh";

if(true){
    console.log(a) // local varaible, TDZ. //Cannot access 'a' before initialization
   let a = "temp"
}