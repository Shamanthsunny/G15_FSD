
//21ques
let Animal = ['horse','cat','mouse'] ;
/* let [animal1,animal2,animal3] = Animal;
console.log(animal1);
console.log(animal2);
console.log(animal3); */

//22qes

let [ , ,animal3] = Animal;
console.log(animal3);

//23ques
const name = "shamanth";
const altitude = 1200;

const funHike = {
    name: name,
    altitude: altitude

};
console.log(funHike);


//24 ques
// Create the skier object
/* const skier = {
    name: 'Alice',
    sound: 'Whee!',
    speed: function(mph) {
    return `${this.name} is skiing at ${mph} mph`;
    }
};


const skiingSpeed = skier.speed(20);
console.log(skiingSpeed); 
 */
//25ques
// Create the skier object
const skier = {
    name: 'Alice',
    sound: 'Whee!',
    speed(mph) {
    return `${this.name} is skiing at ${mph} mph`;
    }
};


const skiingSpeed = skier.speed(20);
console.log(skiingSpeed); 

//26ques

const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];

const tahoe = [...peaks, ...canyons];

console.log(tahoe);