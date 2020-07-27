//Method one of creating objects 

let person = new Object();

person.name = "Daniel";
person.eyeColor = "Blue";
person.age = 27;
person.updateAge = functon(){
    return ++person.age;
}

console.log(person.age); //27
person.updateAge();
console.log(person.age); //28


//method two of creating objects (best form a single objevc)

let person = {
    name: "Daniel",
    eyeColor: "Blue",
    age: 27,
    update: function(){
        return ++person.age;
    }
}

//method three of creating objects - Object Constructors (best for a couple of objects)

function Person(name, eyeColor, age) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function(){
        return ++this.age;
    };
}

//instances of the object
let person01 = new Person("Daniel", "Blue", 27);
let person02 = new Person("Rose", "Green", 45);
console.log(person01.name);












//N/B:
//when you create variables and functions in the file, they are called variables and functions 
//when we create variable and functions in objects, they are called properties and methods. 



