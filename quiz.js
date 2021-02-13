//index.js for FESD Javascript Week4function createFullName(firstName, lastName) {
//    Rewrite the following three functions as arrow functions
//    Make sure to assign them to a const identifier.

function createFullName(firstName,lastName){  
return firstName + " " + lastName;
}

console.log("The full name is " + createFullName("Standard","Function") + ".");

const arrowCreateFullName = (firstName,lastName) => console.log(`The full name is ${firstName} ${lastName}.`);

arrowCreateFullName("Arrow","Function");

function doubleNumber(number) {
  return number * 2;
}

console.log(`${doubleNumber(3)/2} doubled is ${doubleNumber(3)}.`);

const arrowDoubleNumber = theNumber => console.log(`${theNumber} doubled is ${theNumber * 2}.`);

arrowDoubleNumber(3);

function getEvenNumbers(array) {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

console.log(`The even numbers are:  ${getEvenNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])}.`)

const arrowGetEvenNumbers = array => function(){
    let evenNumbers2 = [];
    for (let i of array) {
      if (i % 2 === 0) {
        evenNumbers2.push(i);
      }
    }
    return evenNumbers2;
}();

console.log(`The even numbers are:  ${arrowGetEvenNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])}`);

// The product owner on your development team believes they've seen a pattern as to
//which customers purchase the most socks. To verify, you've been asked to write a
//function that processes an array of customer objects and return a new array that
//contains only customers that match any of the following criteria:

// name starts with a 'C' (upper or lowercase)
// address contains no undefined fields
// the city is Peoria and the state is AZ
// membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too
// the customer's age is evenly divisible by the number of characters in his/her name
// The array of customer objects will have the following schema:

const customers = [
    {
        name: 'Sam33',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: undefined,
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 33
    },
    {
        name: 'Sam32',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    {
        name: 'Cam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 28
    },
    {
        name: 'cam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 29
    },
    {
        name: 'cam2',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 28
    },
    {
        name: 'cam3',
        address: {
            street: '1234 W Bell Rd',
            city: undefined,
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 28
    }
    //more customers with the same schema
];

const matchedCustomers = [];

function commitCustomer(customer){
    matchedCustomers.push(customer);
}

for(var i = 0; i < customers.length;i++){
    if(customers[i].name.substring(0,1) == "c" ||customers[i].name.substring(0,1) == "C"){
            commitCustomer(customers[i]);
        }
    else if (customers[i].address.street != undefined
        && customers[i].address.city != undefined
        && customers[i].address.zip != undefined
        && customers[i].address.state != undefined){
            commitCustomer(customers[i]);
        }
    else if( customers[i].address.city == "Peoria" && customers[i].address.state == "AZ"){
            commitCustomer(customers[i]);
        }
    else if(((customers[i].membershipLevel == "GOLD" || customers[i].membershipLevel == "PLATINUM") && customers[i].age >= 29 )
        ||((customers[i].membershipLevel == "GOLD" || customers[i].membershipLevel == "PLATINUM" || customers[i].membershipLevel == "SILVER") && customers[i].age < 29 )){
            commitCustomer(customers[i]);
        }
    else if(customers[i].age % 2 == 0){
            commitCustomer(customers[i]);
        }
}

// for(var i = 0; i < customers.length;i++){
//     if((customers[i].name.substring(0,1) == "c" ||customers[i].name.substring(0,1) == "C")
//         || (customers[i].address.street != undefined
//             || customers[i].address.city != undefined
//             || customers[i].address.zip != undefined
//             || customers[i].address.state != undefined)
//         || ( customers[i].address.city == "Peoria" && customers[i].address.state == "AZ")
//         || (((customers[i].membershipLevel == "GOLD" || customers[i].membershipLevel == "PLATINUM") && customers[i].age >= 29 )
//             ||((customers[i].membershipLevel == "GOLD" || customers[i].membershipLevel == "PLATINUM" || customers[i].membershipLevel == "SILVER") && customers[i].age < 29 ))
//         || (customers[i].age % 2 == 0))
//     commitCustomer(customers[i]);
// }

