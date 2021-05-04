
const items = [
    { name : 'Bike', price : 100},
    { name : 'Tv', price : 90},
    { name : 'Phone', price : 200},
    { name : 'Book', price : 10},
    { name : 'Computer', price : 500},
    { name : 'Keyboard', price : 1000},
    { name : 'Ear piece', price : 5},
];


//filters or gets all items below price of 200
const filteredItems = items.filter( (item)=> {
    return item.price <= 200
});
console.log( filteredItems );

//MAP takes an array and converts it to a new array
// creates a new array with the results of calling a function for every array element.
console.log("map method")
const mappedItems = items.map( (item)=> {
    return item.name;
})
console.log(mappedItems);

//FIND returns the value of the first element in an array that pass a test (provided as a function).
console.log("find method")
const foundItem = items.find( (item) => {
    return item.price === 90;
})
console.log( foundItem);

// foreach does not return anything. 
console.log("foreach method")
items.forEach( (item) => {
    console.log( item.name + 'ss')
})

//some checks if any of the elements in an array pass a test (provided as a function) and returns true or false
//If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values) otherwise returns false

const hasAffortableItem = items.some( (item) => {
    return item.price <= 20 ;
})
console.log( hasAffortableItem);


//every checks if all of the elements in an array pass a test (provided as a function) and returns true or false
console.log("every method")
const allAffordable = items.every( (item) => {
    return item.price <= 20;
})
console.log(allAffordable);

//reduce method reduces the array to a single value.
//executes a provided function for each value of the array (from left-to-right).
//value of the function is stored in an accumulator (result/total).
console.log("reduce method")
const total = items.reduce( (currentTotal, item ) => {
    return item.price + currentTotal
}, 0 )
// 0 is the starting point, two parameters passed are the starting point and the actual data item in the array
console.log(total)

//includes checks if an array includes/ contains an element. it returns either true or false eg :
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");
console.log(n);

//THE FOLLOWING FUNCTIONS/METHODS AFFECTS OR CHANGES THE ORIGINAL ARRAY 

//splice adds/removes items to/from an array, and returns the removed item(s).
//N/B This method changes the original array.
//array.splice(index, howmany, item1, ....., itemX) //items are optional items to add
let spicedArray = fruits.splice(2, 2, "food", "food1");
console.log(spicedArray);
console.log(fruits); //modified




//N/B: WHEN USING FAT ARROW FUNCTION, IF YOU MUST USE { } AFTER UR => , MAKE SURE TO USE RETURN .
//eg the example below


//SOME MUST KNOW ARRAY METHODS FOR ME (filter, map, reduce)
//filter,
// filter() method creates an array filled with all array elements that pass a test (provided as a function).
//  filter() does not change the original array and filter() does not execute the function for array elements without values.
//the filter method always accepts an argument in the fxn, processes and returns new value
console.log("filter method 2")
const demoArray = [1,2, 3,4,5,6,7,8,9,10];
const nArr = demoArray.filter( a => {
    return a % 2 === 0 
})
const oddArr = demoArray.filter( a => a % 2 === 1)
console.log(nArr)
console.log(oddArr)

//map function
//map() method creates a new array with the results of calling a function for every array element
//does not change original array
console.log("map method 2")
const mArr = demoArray.map( a =>  a % 2 === 0 ) //retuns true or false for all the elements
const m2Arr = demoArray.map( a => a * a)  //returns a square of all items
console.log(m2Arr)

//reduce function
//reduce() method reduces the array to a single value
//reduce() method executes a provided function for each value of the array (from left-to-right).
//reduce takes 2 elements: the total and current value
//array.reduce(function(total, currentValue ))
const smArr = demoArray.reduce((num1, num2) => {
    return (num1 + num2)
})
console.log(smArr);

//COMBINING THE ARRAR FUNCTIONS 
console.log("combination")
const combFn = demoArray.filter( a => a % 2 === 0)
        .map(a => a *a )
        .reduce( (a,b) => a + b );
        console.log( combFn)


const orders = [
    {
        userId: 1,
        amount: 10
    },
    {
        userId: 1,
        amount: 15
    },
    {
        userId: 2,
        amount: 5
    },
    {
        userId: 2,
        amount: 100
    },
];

const sum = orders.filter(order => order.userId === 2)
.map(order => order.amount)
.reduce( (a,b) => a + b );
console.log(sum);

