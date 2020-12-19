//index.js for FESD Javascript Week4

//1.  Use template literals to combine variables
function returnFullName(firstName, lastName){
    console.log(`1.  ${firstName} ${lastName}`);
}

returnFullName("Tim","Gibney");

//2.  Now make 1. above into an "arrow function"

const theFullNameIs = (firstName,lastName) => console.log(`2.  ${firstName} ${lastName}`);

theFullNameIs("Tim","Gibney");

//3a.  An anonymous function using the setTimeout function and alert function.
// The function waits for allotted number of milliseconds (1000 millisconds = 1 second)
// then alerts the window.  Two options follow:  An immediately invoked function execution
// and a command invoked anonymous arrow function.

// (function() {setTimeout(function() {alert("IIFE Time is up!")},2000)})();

const alertUser = duration => setTimeout(function(/*duration*/) {alert("3a.  Time is up!")},duration);
    
alertUser(5000);

//theFullNameIs("John","Gibney");//Having this function here displays that the above setTimeout functions
                                // do indeed not pause processing.  But so will the other upcoming
                                // assignment answers.

//3b.  Write an arrow function that uses the alert functions to display an alert.

const askAreWeThereYet = () => {alert("3b.  Are we there yet?")};

//Then invoke askAreWeThereYet using setInterval to repeatedly display the alert.
//Trouble is, this IIFE will run incessantly without invoking clearInterval().


var intervalID = setInterval(askAreWeThereYet,2000);
// clearInterval(intervalID);




//4a-c.  Array processing function takes someArray and splices at theIndex then
//  uses a callback to output someArray
function processSplicedValue(someArray,theIndex,callback){
    if (callback && typeof(callback) === "function") {
    someArray.splice(theIndex);
    callback(someArray);
    }else{
        console.log(`"${callback}" is not a function.`);
    }
}

//4d.
let arrayOfStrings = ["this","that","the","other"];

// processSplicedValue(arrayOfStrings,2);

let arrayOfStrings2 = ["4d.","this","that","the","other"];
processSplicedValue(arrayOfStrings2,3,console.log);

//4e.
let arrayOfStrings3 = ["4e.","this","that","the","other"];
processSplicedValue(arrayOfStrings3,3,alert);

// let arrayOfStrings4 = ["this","that","the","other"];
// processSplicedValue(arrayOfStrings4,2,2);

//4f.
let arrayOfStrings4 = ["4f.","this","that","the","other"];
processSplicedValue(arrayOfStrings4,3,function(){alert(arrayOfStrings4)});

//4g.
let arrayOfStrings5 = ["this","that","the","other"];
processSplicedValue(arrayOfStrings5,3, function addQuestionPrefix() {
        console.log("4g. " + arrayOfStrings5);
        }
    );


// var users = ["Sam","Ellie","Bernie"];

// function addUser(userName){
//     setTimeout(function(){
//         users.push(userName);
//     },101);
// }

// function getUsers(){
//     setTimeout(function(){
//         console.log(users);
//     },100);
// }

// addUser("Jake");
// getUsers();

// function addUser2(userName,callback){
//     setTimeout(function(){
//         users.push(userName);
//         callback();
//     },1000);
// }

// function getUsers2(){
//     setTimeout(function(){
//         console.log(users);
//     },100);
// }

// addUser2("Jake",getUsers2);