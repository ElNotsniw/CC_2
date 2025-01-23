// Task 1: Store Inventory
let products = ["Laptop", "Mouse", "Keyboard", "Headphones", "Mousepad"]
products.push("Monitor")
products.pop()
let removed = (products.pop())

console.log("Products:", products)
console.log("Removed Product:", removed)

// Task 2: Student Scores
let scores = [52, 61, 75, 84, 90];
scores[1] = 57;
let totalscores = scores.reduce((acc, scores) => acc + scores, 0);
let averagescore = totalscores / scores.length

console.log("Updated Scores:", scores)
console.log("Average Scores:", averagescore)

// Task 3: Employee Records
let employee = {
    name: "Winston Le", 
    age: 21, 
    deparment: "Finance", 
    isActive: "Yes"}
employee.deparment = "Benefits"
employee.position = "Assistant"
console.log("Employee:", employee)

// Task 4: Customer Database
let customers = [
    {name: "Leonard",
    email: "Leonard@gmail.com",
    purchaseAmount: 100},

    {name: "Steven", 
    email: "Steven@gmail.com",
    purchaseAmount: 150},

    {name: "Justin",
    email: "Justin@gmail.com",
    purchaseAmount: 200},
];

customers.push({name: "Sam", email: "Sam@gmail.com", purchaseAmount: 250});

console.log("Customers:", customers)

// Task 5: Object Methods
let order = {
    orderID: 251, 
    customerName: "Leonard", 
    amount: 100,
    calculateTax: function() {
        return this.amount * 0.10;
    }
};

console.log(`Order ID: ${order.orderID}`);
console.log(`Customer Name: ${order.customerName}`);
console.log(`Amount: $${order.amount}`);
console.log(`Tax: $${order.calculateTax().toFixed(2)}`)




