const user = {
    name: "Pramod",
    age: 43
}

const calculator = {
    
    value: 0,
    name: "Promd",

    add(n) {
        this.value += n;
        this.name += "Dutta"
        return this;
    },

    substract(n) {
        this.value -= n;
        return this; 
    }

}

console.log(calculator.add(5).substract(6))
/* {
  value: -1,
  name: 'PromdDutta',
  add: [Function: add],
  substract: [Function: substract]
} */