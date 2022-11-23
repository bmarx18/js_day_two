/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish"," South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(`Their favorite foods are: \n Pizza: ${person3.pizza} \n Tacos: ${person3.tacos} \n Burgers: ${person3.burgers}
            \nIce Cream:\n Oberwise: ${person3.shakes[0].oberwise} \n Dunkin: ${person3.shakes[0].dunkin} \n Culvers: ${person3.shakes[0].culvers} \n McDonalds: ${person3.shakes[0].mcDonalds} \n Cupids Candies: ${person3.shakes[0].cupids_candies}`)

// Write an object prototype for a Person that has a name and age, has a
// printInfo method, and also has a method that 
// increments the persons age by 1 each time the method is called.
// Create two people using the 'new' keyword, and print 
// both of their infos and increment one persons
// age by 3 years. Use an arrow function for both methods
// */

function Person(name, age){
    this.name = name, 
    this.age = age, 
    this.aged = function aged() {
        this.age++;
    }

    printInfo(){
        return `${this.name} is ${this.age}.`
    }
}

let Taylor = new Person('Taylor', 31)
console.log(Taylor.printInfo())

let Linda = new Person('Linda', 56, aged(3))
console.log(Linda.printInfo())

/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isGreaterTen = (word) =>{
    if (word > 10){
        console.log('Big Word')
    }else{
        console.log('Small Number')
    }
}

//code wars problems 

//Sum Numbers 
function sum (numbers) {
    "use strict";
    
    for (int i = 0; i < n; i++)
        sum += arr[i];
    
  return sum
};

//multiply

function multiply(a, b){
    return a * b
  }
  