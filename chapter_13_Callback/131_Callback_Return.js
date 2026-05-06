function calculate(a, b, opetation) {
    return opetation(a, b)
}

let sum = calculate(10, 5, function (x, y) {
    return x + y;
});

console.log(sum) // 15

console.log("A: Test suite started");

setTimeout(function () {
    console.log("B: Slow API test finished")
}, 1000);

console.log("C: Fast unit test finished");

/* output

A: Test suite started
C: Fast unit test finished
B: Slow API test finished */