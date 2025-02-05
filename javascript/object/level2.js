// Level 2 Questions

// Q1: Extract and return the 'firstName' and 'lastName' properties as a single string from the 'person' object.
// Expected output:
// 'John Doe'
const person1 = { firstName: 'John', lastName: 'Doe', age: 30 };

console.log(person1.firstName + ' ' + person1.lastName)


// Q2: Create a new object by merging the 'details1' and 'details2' objects.
// Expected output:
// { name: 'John', age: 25, city: 'New York', hobby: 'Soccer' }
const details1 = { name: 'John', age: 25 };
const details2 = { city: 'New York', hobby: 'Soccer' };

const totalDetail = {...details1 , ...details2}
console.log(totalDetail)


// Q3: Add a new property 'quantity' with the value 10 to the 'product' object, if it doesn't already exist.
// Expected output:
// { name: 'Laptop', price: 800, quantity: 10 }
const product3 = { name: 'Laptop', price: 800 };

if(!product3.quantity){
    product3.quantity = 10;
}
console.log(product3);


// Q4: Check if all properties ('make', 'model', 'year') exist in the 'car' object.
// Expected output:
// false
const car4 = { make: 'Toyota', year: 2021 };

const checkAllProperties = car4.hasOwnProperty('make')&&car4.hasOwnProperty('model')&&car4.hasOwnProperty('year')
console.log(checkAllProperties)


// Q5: Create a copy of the 'student' object without modifying the original object.
// Expected output:
// { name: 'Alice', age: 20, grade: 'A' }
const student5 = { name: 'Alice', age: 20, grade: 'A' };

const copyStudent = {...student5};
console.log(student5);
copyStudent.name = 'Hari';
console.log(copyStudent);


// Q6: Check if the 'address' property in the 'user' object is a string.
// Expected output:
// true
const user6 = { name: 'John', age: 30, address: '123 Main St' };

const checkString = typeof(user6.address) === 'string';
console.log(checkString);


// Q7: Retrieve the keys of the 'inventory' object as an array.
// Expected output:
// ['apples', 'bananas', 'oranges']
const inventory7 = { apples: 10, bananas: 5, oranges: 8 };

const inventoryKeys = Object.keys(inventory7);
console.log(inventoryKeys);


// Q8: Create an array of all the property values from the 'data' object.
// Expected output:
// ['John', 25, 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };

const allArr = Object.values(data8);
console.log(allArr);


// Q9: Check if any property in the 'book' object has a value of null.
// Expected output:
// false
const book9 = { title: 'JavaScript Basics', author: 'John Smith', year: 2020 };

const prop = Object.values(book9);
prop.includes(null);


// Q10: Reverse the 'fullName' property value in the 'person' object.
// Expected output:
// 'doe John'
const person10 = { fullName: 'John doe' };

const reverseWork1 = person10.fullName;
console.log(reverseWork1);
const reverseWork2 = reverseWork1.split(' ').reverse().join(' ');
console.log(reverseWork2)
