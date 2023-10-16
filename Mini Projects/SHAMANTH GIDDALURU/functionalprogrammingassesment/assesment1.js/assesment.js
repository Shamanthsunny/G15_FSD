// // 1.ques

// let pizza=true;
// pizza =false;
// console.log(pizza)
// //2.ques
// // const pizza1 = true;
// // pizza1 = false;
// // console.log(pizza1)
// // TypeError: Assignment to constant variable.




// var topic = "Javascript";

// if (topic){

//     let topic="React"
//     console.log(topic)
//      //3.print here topic
//     // value:React
    

// }
// console.log(topic)
// //4.ques
// //5.ques  value:Javascript


// // 6. ques created a  div with id container in html file

// // 7. ques  
// let container = document.getElementById("container");


// // 8.  ques


// for (let i=1; i<=5; i++){
//       // Create a new div element
//     let  divElement = document.createElement("div");
//       // Add an event listener for the "click" event
//     divElement.addEventListener("click", function() {
//         alert(`Clicked on Div ${i}`);
//     });
//       // Append the div to the container
//     container.appendChild(divElement);

// }

// //9.ques
// const email = `
// Hello <<firstName>>,
// Thanks for ordering <<qty>> tickets to <<event>>.

// Order Details:
// <<firstName>> <<middleName>> <<lastName>>
// <<qty>> * <<price>> = <<qty*price>> to <<event>>

// You can pick up your tickets up 30 minutes before the show.

// <<ticketAgent>>.`;

// // Example variable values
// const firstName = "John";
// const middleName = "Doe";
// const lastName = "Smith";
// const qty = 4;
// const price = 25.5;
// const event = "Concert";
// const ticketAgent = "TicketMaster";


// const formattedEmail = email
//     .replace(/<<firstName>>/g, firstName)
//     .replace(/<<middleName>>/g, middleName)
//     .replace(/<<lastName>>/g, lastName)
//     .replace(/<<qty>>/g, qty)
//     .replace(/<<price>>/g, price)
//     .replace(/<<event>>/g, event)
//     .replace(/<<ticketAgent>>/g, ticketAgent);

// console.log(formattedEmail);

// //10ques

// // Assuming you have your article data and date
// const article = {
//     title: "Getting Started with React",
//     body: "React is a JavaScript library for building user interfaces.",
// };

// const displayDate = new Date().getFullYear();

// // Replacing placeholders
// document.body.innerHTML = `
// <section>
// <header>
//     <h1>The React Blog</h1>
// </header>
// <article>
//     <h2>${article.title}</h2>
//     ${article.body}
// </article>
// <footer>
//     <p>Copyright ${displayDate} | The React Blog</p>
// </footer>
// </section>
// `;








// // 11. ques
// //function logCompliment () {
// //     console.log("you are doing great")
// // }

// // logCompliment();

// // 12. ques

// // let logCompliment =  function logCompliment() {
// //     console.log("you are doing great")
// // };

// // logCompliment();

// // 13.ques


// function logCompliment(name, message) {
//     return name + " has a message " + message;
// }

// let Compliment = logCompliment("alicia","you are good");
// console.log(Compliment);


// // 14.ques

// function logActivity(name, activity = "default activity") {
//     return name + " is engaging in " + activity + ".";
// }
// const activityMessage1 = logActivity("Bob");
// console.log(activityMessage1); 

// // 15.ques

// // let greeting =  (arg1,arg2) => {
// //     console.log(arg1 + " is from " + arg2)
// // } ;

// // greeting("greetings","amar")

// // 16.ques

// // let greeting = (arg1, arg2) => {
// //     if (arg1 === null || arg1 === "") {
// //         throw new Error("arg1 is missing or null.");
// //     } else {
// //         console.log(arg1 +" is from " + arg2);
// //         return arg1;
// //     }
// // };

// // try {
// //     let result1 = greeting("Alice", "Wonderland");
// //     console.log(result1); 

// //     let result2 = greeting(null, "Narnia"); 
// //     console.log(result2);
// // } catch (error) {
// //     console.error(error.message); 
// // }


// // 17.ques

// const tahoe = {
//     mountains: ["Sierra", "Cascade", "Rubicon"],
//     print: function () {
//         const mountainNames = this.mountains.join(', ');
//         setTimeout(() => {
//             console.log(mountainNames);
//         }, 1000);
//     }
// };


// tahoe.print(); 

// // 18.ques


// /* const sandwich = {
//     bread: "wheat",
//     meat: "mutton",
//     cheese: "italian",
//     toppings: ["chilli", "tomato", "onion"]
// };

// console.log("Bread:", sandwich.bread);
// console.log("Meat:", sandwich.meat);
// console.log("Cheese:", sandwich["cheese"]);
// console.log("Toppings:", sandwich["toppings"]); */

// //19.ques

// /* let sandwich = {
//     bread: "wheat",
//     meat: "mutton",
//     cheese: "italian",
//     toppings: ["lettuce", "tomato", "onion"]
// };


// let { bread, meat } = sandwich;

// console.log("Bread:", bread); 
// console.log("Meat:", meat);   
//  */
// //20.ques

// let sandwich = {
//     bread: "wheat",
//     meat: "turkey",
//     cheese: "cheddar",
//     toppings: ["lettuce", "tomato", "onion"]
// };

// let { bread, meat } = sandwich;

// bread = "multigrain";
// meat = "ham";

// console.log("Bread:", bread); 
// console.log("Meat:", meat);   















