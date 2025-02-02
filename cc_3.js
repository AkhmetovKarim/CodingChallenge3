//Task 1: Product Price Management

let prices = [70, 80, 90, 100, 110];
prices.push(120); //Add a new price to array
prices.shift(); // Remove first price
console.log("Updated Prices:", prices); //Log updated price list


//Task 2: Modifying Customer Orders

let orders = [50, 60, 70, 80, 90]; //Declare an array
orders[2] += 5; //Increase third number by 5
let totalOrders = orders.reduce((sum, quantity) => sum + quantity, 0); //Calculate total number of orders
//Log updated array and total order count 
console.log("Updated Order Quantities:", orders);
console.log("Total Order Count", totalOrders);

//Task 3: Employee Performance Tracking

//Declare an employee object with properties
let employee = {
    name: "Björn Járnsíða",
    role: "IT",
    performanceScore: 95,
    isActive: true
};
employee.performanceScore = 99; //Update performance score
employee.promotionEligible = employee.performanceScore >= 75; //Add a property promotionEligible
console.log(employee); //Log



