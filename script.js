// Testing the link
console.log("Week 7 Assignment");

//Assignmenst 1a

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log((ages[ages.length-1]) - (ages[0])); 
//Find the last array element to subtract the first array element.

//Assignment 1b

ages.push(42);  //Use .push to add new element to the end of array.
console.log((ages[ages.length-1]) - (ages[0]));
//Find the last array element to subtract the first array element.

//Assignment 1c

let sum = 0;
for (var i = 0; i < ages.length; i++){
    sum += ages[i];
   }
let average = sum / ages.length;   
//find the sum of the array then devide it by the length of the array to get average. 
console.log("average age: " + average );


//Assignment 2a

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

let totalLetters = 0; 
for (var i = 0; i < names.length; i++){
    totalLetters += names[i].length;     //Find the total letter counts.
}
let averageLetters = totalLetters / names.length;
//Use total letter counts to devide the total names to get average letter counts for this array.
console.log(averageLetters);


//Assignment 2b

let concatenateNames = "";
for (var i = 0; i < names.length; i++){
    concatenateNames += names[i]; //Concatenate each names.
    if (i !== names.length - 1){
        concatenateNames += " "; //Give a space between each name, except for the last name.
    }
}
console.log("Concatenate Names:", concatenateNames);

//Assignment 3
//How do you access the last element of any array? 
//array.length - 1

//Assignment 4
//How do you access the first element of any array?
//array[0]

//Assignment 5

let namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] //starting with this array
let nameLengths = []  // create a new array
for (var i = 0; i < namesArray.length; i++)
    nameLengths.push(namesArray[i].length);   //Use .push to add name's lenght to the new array. 

console.log(namesArray);
console.log(nameLengths)

//Assignment 6

let totalLengthsSum = 0;

for(var i=0; i<nameLengths.length; i++)
    totalLengthsSum += nameLengths[i];    //use += to caculate the sum of the nameLength. 

console.log("Sum of all the elements is " + totalLengthsSum + ".")

//Assignment 7

function test (word, n){
return word.repeat(n);      //Use the .repeat in JavaScript to repeat the paramater
}

console.log(test("Hello", 3));

//Assignment 8

function fullName (firstName, lastName){
    return firstName + " " + lastName;   // Adding " " to give space between firstname and lastname.
}

console.log(fullName("Crystal", "Lo"));

//Assignment 9
var numbers = [3, 9, 23, 64, 2, 8, 28, 93, 42];

function sumArray(numbers){
    
    let sum = 0;
    for (var i = 0; i < numbers.length; i++){
    sum += numbers[i];
   }                              // Find the sum of the array.
}
if (sum > 100){
    sumArray = true;     // Give it a boolean rule to see if the sum is greater than 100.
} 
console.log(sumArray);

//Assignment 10

var newNumbers = [2, 4, 6, 8, 10];

let newSum = 0;
for (let i = 0; i < newNumbers.length; i++){
    newSum += newNumbers[i];                     //Find the sum of the array.
}
var averageNew = newSum / newNumbers.length;     
//Devide the sum of array by the length of the array to get the average of the array.

console.log("Average of all the elements is: " + averageNew);

//Assignment 11

let average1 = sum / numbers.length;      //Find average for first array.
let average2 = newSum / newNumbers.length;   // Find average for second array.

if (average1 > average2){
        compareArray = true;
    }else{
        compareArray = fales;
    }                          //Give a boolean rules to return true when array1 average is greater than array2 average. 

console.log(compareArray);

//Assignment 12

let willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside && moneyInPocket > 10.50;


console.log("It is hot ouside and they have $11. Will they buy a drink? " + willBuyDrink(true, 11));  
//Meet the requirement isHotOutside and more than $10.50; return true.
console.log("It is not hot ouside and he has $8. Will he buy a drink? " + willBuyDrink(false, 8));  
//Not meet the requirement isHotOutside (false) and less than $10.50; return false.
console.log("It is hot ouside and she has $8. Will she buy a drink? " + willBuyDrink(true, 8));  
//Meet the requirement isHotOutside but less than $10.50; return false.


//Assignment 13

function isPrimeNumber (num){
    if(num <= 1) return false;
    for (var i = 2; i < Math.sqrt(num) +1; i++){
        if(num % i == 0) return false;
    } return true;
}

console.log("Is number 4 a prime number? " + isPrimeNumber(4)); 
console.log("Is number 5 a prime number? " + isPrimeNumber(5));
console.log("Is number 127 a prime number? " + isPrimeNumber(127));

//Assignment 13 - I created a function to test out if the vareable number is a prime number or not.
//This function can be use at the math class for student to better check for prime numbers, especially with a large number(multi-digits). 
//(A prime number is a number that can only be divided by itself and 1 without remainders.) 



