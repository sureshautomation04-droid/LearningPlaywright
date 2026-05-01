console.log('Hello')

function add(a,b){
    return a+b;
}
let result;
for(let i = 0; i<= 10; i++){
    result = add(i, i+1)
}
console.log("After 10 calls :", result)