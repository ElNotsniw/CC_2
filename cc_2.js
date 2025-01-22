let products = ["Laptop", "Mouse", "Keyboard", "Headphones", "Mousepad"]
products.push("Monitor")
products.pop()
let removed = (products.pop())

console.log(products)
console.log(removed)

let scores = [52, 61, 75, 84, 90];
scores[1] = 57;
let totalscores = scores.reduce((acc, scores) => acc + scores, 0);
let averagescore = totalscores / scores.length

console.log("Updated Scores:", scores)
console.log("Average Scores:", averagescore)

let employee = {name: "Winston Le", age: 21, deparment: "Finance", isActive: "Yes"}
employee.deparment = "Benefits"
employee.position = "Assistant"
console.log(employee)

let customers = [
    {name: "Leonard", email: "Leonard@gmail.com", purchaseAmount: 100},
    {name: "Steven", email: "Steven@gmail.com", purchaseAmount: 150},
    {name: "Justin", email: "Justin@gmail.com", purchaseAmount: 200},
];

customers.push({name: "Sam", email: "Sam@gmail.com", purchaseAmount: 250});

console.log(customers)

