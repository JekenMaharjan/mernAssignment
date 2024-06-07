// Level 3 Questions

// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: 'John', age: 30 };

const objAge = person1.age;
console.log("Age of person1 is" + ' ' +  objAge);
function validate(){
  if(objAge>0 && objAge<=12){
    return 'Child';
  }
  else if(objAge>12 && objAge<=19){
    return 'Teen';
  }
  else if(objAge>19 &&  objAge<=59){
    return 'Adult';
  }
  else{
    return 'Senior';
  }
}
const whichAge = validate();
console.log(whichAge);


// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };

const inventoryItem = Object.values(inventory2);
function calculateTotal(){
  let totalItem = 0;
  for(let i = 0; i < inventoryItem.length; i++){
    totalItem = totalItem + inventoryItem[i];
  }
  return totalItem;
}
const itemTotal = calculateTotal();
console.log(itemTotal);


// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };

function arrStudent(){
  const studentNames = Object.values(students3);
  return studentNames;
}
const arrOfStudent = arrStudent();
console.log(arrOfStudent);


// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };

function checkValues(){
  if(Object.values(details4) !== 'null'){
    return true;
  }
  else{
    return false;
  }
}
const checKing = checkValues();
console.log(checKing);


// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 116.67
const products5 = { product1: { name: 'Laptop', price: 800 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };
  
function avgPrice(){
  const a = products5.product1.price
  const b = products5.product2.price
  const c = products5.product3.price
  const avg = (a+b+c)/3
  return avg;
}
console.log(avgPrice());


// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };

function highScore(){
  const scoreAll = Object.values(scores6);
  console.log(Math.max(...scoreAll));
}
highScore();


// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };

const a = employees7.emp1.salary
const b = employees7.emp2.salary
const c = employees7.emp3.salary

const employEE = {a, b, c}
console.log(employEE);

const emp = Object.values(employEE);

function avgSalary(){
  let sum=0;
  for(i=0;i<emp.length;i++){
    sum = sum + emp[i];
  }
  return (sum/(emp.length));
}

avgSalary();


// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };

function ascend(){
    Object.values(data8).sort();
}
ascend();


// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };

function totalCost(){
  const cost = order9.quantity * order9.price;
  return cost;
}
totalCost();


// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };

function totalAmountSpent(){
  const total = Object.values(expenses10);
  let sum = 0;
  for(i=0;i<total.length;i++){
    sum=sum+total[i];
  }
  return sum;
}
totalAmountSpent();

