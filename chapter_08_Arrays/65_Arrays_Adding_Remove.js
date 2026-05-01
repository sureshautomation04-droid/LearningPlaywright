let arr = [1,2,3];

// Add to END
arr.push(4)
console.log(arr)

//Remove from END
arr.pop();
console.log(arr)

arr.push(5,6);
console.log(arr);


//Add to Beginning
arr.unshift(0);
console.log(arr);

// Remove from Beginning
arr.shift();
console.log(arr);

//splice(start, deleteCount, ....itemsToAdd)
arr.splice(2,1); // remove 1 item at index 2
console.log(arr);

arr.splice(2 ,0);
console.log(arr);

arr.splice(2 ,0, 99);
console.log(arr);

arr.splice(1,2,10,20);
console.log(arr);