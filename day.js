/* 
for (i=44;i<=66;i++){
     console.log(i);
 }

// console.log("hello".toUpperCase())
// console.log(typeof 25)
// console.log(typeof '25')

// console.log(typeof true)

// console.log(typeof null)

// console.log(Math.random())

// console.log(Math.random()*10)

// console.log(Math.floor(Math.random()*10))


// console.log("All Around the World".toUpperCase().charAt(7))

// let name = ("Pierre");
// let age = 38;
// let colour = ("purple");
// console.log(`hello i am ${name} i am ${age} and ${colour} is my favourite colour`);

// let space1 = "x";
// let space2 = "o";
// let space3 = "";
// let space4 = "x";
// let space5 = "x";
// let space6 = "";
// let space7 = "o";
// let space8 = "";
// let space9 = "";



// console.log('     |      |')
// console.log(` ${space1}   |  ${space2}   |${space3}`)
// console.log('     |      |')
// console.log('  --------------')
// console.log('     |      |')
// console.log(` ${space4}   |  ${space5}   |${space6}`)
// console.log('     |      |')
// console.log('  --------------')
// console.log('     |      |')
// console.log(` ${space7}   |  ${space8}    | ${space9}`)
// console.log('     |      |')

// if (1 == '1') {
//     console.log(true)
// } else {
//     console.log(false)
// }
/*
let place = "Manc";
let weather = "Rain"

if (place == "Manc" && weather == "Sunny") {
    console.log("Check again")
} else if (place == "Manc" && weather == "Rain") {
    console.log("Obvs")
} else {
    console.log("what it isn't raining?")
}
let country = "Uk";
let age = 18;
if (age >= 18 && country == "Uk"){
    console.log (true)
   
} else {
    console.log (false)
}
// const addUp = (num1,num2) => {
//     return console.log(num1 + num2)

    
// }
// addUp(10, 3)

// console.log(addUp(5, 2))
const coffeeOrder = (size, typeOfDrink) => {
    return console.log (`hello i would like to order are ${size} i want a ${typeOfDrink}`);
    
}

coffeeOrder("medium", "hotChocolate")


const addUp = (num1, num2) => {
    return console.log (num1 * num2)
}
addUp (10, 2)

// const dan = () => {
// }


let coffeeOrder1 = ['Sam - Hot chocolate', 'Stuart - Cortado', 'Dan - Latte']
console.log(coffeeOrder1)

console.log (coffeeOrder1[1])
coffeeOrder1[1] = "Stuart - Latte"
coffeeOrder1 [1] = "Stuart - Latte"
console.log (coffeeOrder1)

coffeeOrder1.push ("Pierre - water")
console.log (coffeeOrder1)
coffeeOrder1.pop ()
console.log (coffeeOrder1)

coffeeOrder1.shift ()
console.log (coffeeOrder1)
coffeeOrder1.unshift ("Pierre - water")
console.log (coffeeOrder1)

let website = ["spotify", "youtube", "snapchat"] 
console.log (website)
website.push ("google", "slack")
console.log (website)
website.pop ()
console.log (website)
website.push ("slack")
console.log (website)
website.pop()
console.log (website)

const increase = (number) => {
    let increasedNumber = ++ number
    console.log (increasedNumber)
}
increase (3)
const decrease = (number3) => {
    let decreasedNumber = -- number3
    console.log (decreasedNumber)
}
decrease (9)


 for (j=9; j > -1; j--){
     console.log(j);
 }

 let favouriteDrinks = [`Coke`, `Fanta`, `Tonic`, `Red Bull`];
 for(drinksIndex = 0; drinksIndex < favouriteDrinks.length; drinksIndex++){
     console.log(favouriteDrinks[drinksIndex])
 }

 let favouritefilms = [`The Matrix`, `Mr Robot`, `POI`, `The Hulk`, `Star Wars`];
 favouritefilms.unshift ("MIB")
 favouritefilms.push ("Lord of the Rings")
 for(filmsIndex = 0; filmsIndex < favouritefilms.length; filmsIndex++){
     console.log(favouritefilms[filmsIndex])
    }

const filmcheck = (listoffilms) => {
    if (favouritefilms [4] == ("The Hulk")) {
        console.log("Hulk Smash")
    }
    else {
        console.log ("bruce banner was not here")
    } 
}
filmcheck (favouritefilms)

for (i = 1; i <= 1000; i++){
    if (i % 3 == 0 || i % 5 == 0)
    console.log(i)
}
let answer = []
let p = 0

for (i = 1; i < 1000; i++){
    if (i % 3 == 0 || i % 5 == 0){
        answer[p] = i;
        p++;
    }
}

let sum = 0;

for (var i = 0; i < answer. length; i++) {
    sum += answer [i];

}

console.log(sum);

let str = `jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh`;
let pos = str.indexOf ("hi");
let pos2 = str.lastIndexOf ("hi");
console.log(pos)
console.log(pos2)

for (index = 0; index < str. length; index++){
    console.log(str[index])
}

let person = {
    name:"Pierre",
    age: 29,
    likesFilms: true,
    favouritefilm:["The Matrix",]
};
console.log(person.name)

person[`favBuscuits`] = [`custard creams`, `posh biscotti`];
console.log (person.favBuscuits)

person[`favSong`] = [`jazz`];
console.log (person.favSong)

person[`friendlyGreeting`] = (`hi how are you?`);
console.log (person.friendlyGreeting)



let person1 = {
    name: "Pierre",
    favSong: ["jazz"],
    mood: "bad",
    greeting () {
        if (this.mood == "good"){
            return "hi there"}
            else {
                return "no comprendi"}
            },
        sayHi (){
            return `move on my mood is ${this.mood}`

        }
    };
        console.log(person1.sayHi())

*/

let rabbit = {
    name: "Sherlock",
    colour: "black and white",
    ears: "uppy",

    bunHop (){
        return "sherlock is hopping"
    },
    bunChew (){
        return "sherlock is chewing"
    }
    
}

console.log (rabbit.bunChew())

console.log ("Sam".search("S"));

console.log ("sherlock".lastIndexOf())




var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);

console.log(pos)