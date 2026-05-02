//Accessing & Modifying
let statuses = ["pass","fail","skip"];
console.log(statuses[0]); // pass
console.log(statuses[2]); // skip

console.log(statuses.at(-1));  //last element
console.log(statuses.at(-2));
console.log(statuses.at(-3));


//Modify
statuses[1] = "blocked";
console.log(statuses);

//length
console.log(statuses.length);