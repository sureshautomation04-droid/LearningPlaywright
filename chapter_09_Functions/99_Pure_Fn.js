// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.

// ✅ Pure — no side effects, predictable output
function calculatePassRate(total, passed) {
  return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));


// ❌ Impure — depends on external state
function isPassing(score) {
    return score >= threshold; // depends on external variable

}

let threshold = 70;
console.log(isPassing(50)) // false ❌

console.log(isPassing(80)) // true ✅

threshold = 20;

console.log(isPassing(15)) // false ❌

console.log(isPassing(25)) // true ✅

