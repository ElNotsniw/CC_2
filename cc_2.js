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
