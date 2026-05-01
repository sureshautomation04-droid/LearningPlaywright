let browser = ['Chrome','Firefox','Opera','Edge'];
console.log(browser.length)
console.log(browser)

//Remove last item
browser.pop();
console.log(browser)

console.log("--------TTA------------")

//Remove first item
let remove = browser.shift();
console.log(browser)
console.log(remove);

console.log("--------TTA------------")

for(let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if(browser[i] === "Opera") {
        console.log("Opera is removed from the Selenium")
    }
}