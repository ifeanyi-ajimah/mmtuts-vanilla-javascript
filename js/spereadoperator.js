// There are 3 places you can use spread operators
// 1, in function calls 
// 2, in array literals 
// 3, in object literals 
console.log("spead operation")
const temperatures = [76, 72, 68, 79,54,90, 12, 33,4];
const mint = Math.min(temperatures);//this returns NaN instead, we use spread to expand the array and pass each element as an argument
console.log(mint)
const mint2 = Math.min(...temperatures);
console.log(mint2)
const tvShows = ["Six Feet Under", "Chernobyl", "Black Mirror", "Fleabag" ]
console.log(tvShows);
console.log(...tvShows)

//other literals
console.log("this s#@* is bananas: ", ..."BANANAS");

//spread and array literals
//spread can be used to combine arrays

const parents = ["Lorie", "Steve"];
const kids = ['Jake', "Annie", "Jess"];
const dogs = ['Olie', 'Cosmo'];

const fullFamily = [...parents, ...kids, "Me", ...dogs, "Unnamed Turtle"];
console.log(fullFamily);

//copying an array
const originals = ["Mona Lisa", "American Gothic", "The School of Athens"];
const copies = [...originals];

originals.push("Nighthawks");
console.log(copies);

//we can as well add propertie
const lion = {hasTail: true, legs: 4};
const eagle = {canFly: true };
const hybrid = {name: "Gryphon", ...lion, ...eagle};
console.log(hybrid)










