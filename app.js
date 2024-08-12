// //!If Else Statement Problems

// //? Question 1;
// //* Write a line of code that declares an array called fruits with the elements "apple", "banana", and "cherry". Then, log the second element of the array to the console.
// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[1]);

// //? Question 2:
// //*Write a line of code tht declares an array called numbers with the elements 1, 2, 3, 4, and 5. Then, create a variable sum that is the sum of the first and third elements of the array, and log sum to the console.

// let num = [1, 2, 3, 4, 5];
// let sum = num[0] + num[2];
// console.log(sum);

// //? Question 3:
// //* Write a line of code that declares an array called languages with the elements "JavaScript", "Python", and "Java". Then, change the second element of the array to "Ruby" and log the entire array to the console.

// let languages = ["Javascript", "Python", "Java"];
// languages[1] = "Ruby";
// console.log(languages);

// //? Question 4:
// //* Write a line of code that declares a variable age and assign it the value 20. Then, use an if-else statement to check if age is greater than or equal to 18, and log "Eligible to vote" if true, and "Not eligible to vote" otherwise.
// let age = 20
// if (age >= 18) {
//     console.log("Eligible to vote")
// } 
// else {
// console.log("Not eligible to vote");
// };

// //? Question 5:
// //* Write a line of code that declares an array called cities with the elements "New York", "Los Angeles", and "Chicago". Then, create a variable lastCity that holds the last element of the array, and log lastCity to the console.
// let cities = ["New York", "Los Angeles", "Chicago"];
// let lastCity = cities[2];

// console.log(cities[2]);

// //? Question 6:
// //* Write a line of code that declares a variable x and assigns it the value 7. Then, use an if-else statement to check if x is greater than 5 or less than 10, and log "In range" if ture, and "Out of range" otherwise.

// let x = 7;
// if (x > 5 || x < 10) {
//     console.log("In range")
// }
// else {
//     console.log("Out of range");
// };

// //! Loops Problems

// //! List of Favorite Movies
// //TODO Define an array of favorite movies

// let favMovies = ["Friday After Next", "WaterBoy", "Transfomers", "Bad Boyz"];

// for (let i = 0; i < favMovies.length; i++) {
//     console.log(favMovies[i]);
// };

// //! Sum of Array Elements
// //TODO Define an aray of 5 numbers
// let numbers = [33, 64, 15, 79, 51];
// let total = 0;

// //TODO Caluculate sum of the numbers
// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }
    
// //Output the results
// console.log(total)

// //! Update Array Elements

// //TODO Define an array of items
// let colors = ["red", "blue", "green", "yellow", "purple"];

// //TODO Update

// //? green to cyan
// //? purple to orange
// for (let i = 0; i < colors.length; i++) {
//     if (colors[i] == "green") {
//         colors[i] = "cyan"
//     } else if (colors[i] == "purple") {
//         colors[i] = "orange"
//     } 
// };

// //*Output the results
// console.log(colors);

// //!Grade Categorizer
// //TODO Define a array of 5 grade numbers
// debugger
// let grades = [96, 87, 75, 62, 54];

// //TODO Categorize each grade
// //* Output each result

// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] <= 100 && grades[i] >= 90) {
//         console.log(`Great Job!! You made an A!!`)
//     } else if (grades[i] <=89 && grades[i] >= 80) {
//         console.log(`Good you made a B!`)
//     } else if (grades[i] <= 79 && grades[i] >= 70) {
//         console.log(`You passed with a C.`)
//     } else if (grades[i] <= 69 && grades[i] >= 60) {
//         console.log("You have to study more. You made a D.")
//     } else {
//         console.log("Better luck next time. You failed this test....")
//     };
// };

// //! Day of the Week Checker
// //TODO Define anarray of days of the week
// let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// //TODO Define a variable for the day to check
// //TODO Check if the day is a weekday or weekend
// // Variable "i" gives the index to the array and updates +1 after each loop for the length of the array which is "5".

// for (let i = 0; i < weekDays.length; i++) {
//     if (weekDays[i] == "Friday" || weekDays[i] == "Saturday") {
//         console.log("I'm ready to party tonight!!")
//     } else {
//         console.log("Its been a long but productive week. Can't wait to hang out this weekend....")
//     }
// };

// //* Output the result

// //!Temperature Checker
// //TODO Define a array of 5 temperature numbers
// let temp = [91, 87, 55, 0, 73]

// //TODO Categorize the temperatures in 3 types (HOT, COLD, just right)
// //*Output the result

// for (let i = 0; i < temp.length; i++) {
//     if (temp[i] <= 100 && temp[i] >= 90) {
//         console.log("It is extremely HOT outside today")
//     } else if (temp[i] <= 89 && temp[i] >=80) {
//         console.log("Its kinda HOT out here today..")
//     } else if (temp[i] <= 79 && temp[i] >= 70) {
//         console.log("The weather feels JUST RIGHT out here today!!")
//     } else if (temp[i] <= 69 && temp[i] >= 60) {
//         console.log("Its COLD outside today..")
//     } else {
//         console.log("It's too damn COLD outside. I need a jacket!!")
//     };
// };


// //! Number Sign Checker
// //TODO Define a array of 5 numbers
// let num = [-8, 23, 0, 63, -72]
// //TODO Check the sign of the number
// //*Output the result

// for (let i = 0; i < num.length; i++) {
//     if (num[i] < 0) {
//         console.log("This is a negative number")
//     } else if (num[i] == 0) {
//         console.log("This number is a 0...")
//     } else {
//         console.log("This is a positive number")
//     };
// };

// //! Multiple Checker
// //? Create a program that checks if the elements in an array of numbers are multiples of a specific number and displays a message accordingly.

// //TODO Define an array containing a list of numbers.
// let num = [21, 42, 56, 87, 35]
// let multiple = 3;
// //TODO Define a variable for the specific number to check multiples of.
// //*Output Results: Use console.log to display the results.

// for (let i = 0; i < num.length; i++) {
//     if (num[i] % multiple === 0) {
//         console.log(`${num[i]} is a multiple of ${multiple}`)
//     } else {
//         console.log(`${num[i]} is not a multiple of ${multiple}`)
//     }
// };


// //! Age Group Categorizer
// //? Create a program that categorizes the ages in an array as 'child', 'teen', 'adult', or 'senior' based on their values.
// //TODO Define an array containing a list of ages.
// //*Output Results: Use console.log to display the age categories.

// let ages = [4, 16, 35, 61]

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] <= 12) {
//         console.log("You are a child...")
//     } else if (ages[i] >= 13 && ages[i] <= 18) {
//         console.log("You are a teen..")
//     } else if (ages[i] >= 19 && ages[i] <= 60) {
//         console.log("You are now an adult...")
//     } else {
//         console.log("You are now a senior citizen...")
//     };
// };

// //! Palindrome Checker
// //? Create a program that checks if the elements in an array of strings are palindromes and displays a message accordingly.
// //TODO Define an array containing a list of strings.
// //*Output Results: Use console.log to display the results.

// let words = ["lemon", "rotor", "code", "civic"];

// for (let i = 0; i < words.length; i++) {

//     //declraing a variable "rev" to split, reverse, then join the word in the index of "words[i]"
//     //.split splits the word in the index into seperate characters. Ex. the word "rotor" would change to be "r","o","t","o","r".
//     //.reverse will reverse the string or character of the array.
//     //.join will combine character of the string to become one word. Ex. "r","o","t","o","r" will become "rotor" again.

//     let rev = words[i].split("").reverse().join("");

//     // Checked to see if

//     if (words[i] === rev) {
//         console.log(`${words[i]} is a palindrome...`)
//     } else {
//         console.log(`${words[i]} is not a palindrome... `)
//     };
// };




// //! Prime Number Checker
// //? Create a program that checks if the elements in an array of numbers are prime and displays a message accordingly.
// //TODO Define an array containing a list of numbers.

// let numbers = [19, 59, 101, 6, 0]

// for (let i = 0; i < numbers.length; i++) {
//     let isPrime = true;

//     if (numbers[i] <= 1) {
//         console.log(`${numbers[i]} is not a prime number`)
//     } else if (numbers[i] % 2 === 0) {
//         console.log()
//     }

    
// }





// //*Output Results: Use console.log to display the results.

// //! Uppercase Cechker
// //? Create a program that checks if the elements in an array of strings are in uppercase and displays a message accordingly.
// //TODO Define an array containing a list of strings.
// //*Output Results: Use console.log to dislay  the results.

// let months = ["May", "DECEMBER", "APRIL", "july"]

// for (let i = 0; i < months.length; i++) {
//     //Checking to see if months in array are uppercase using the .toUpperCase Method
//     if (months[i] === months[i].toUpperCase()) {
//         console.log(`${months[i]} is all uppercase!!!`)
//     } else {
//         console.log(`${months[i]} is not in uppercase...`)
//     };

// };


// ! Quiz Exercise
// ? Give me the total amount of each coin;
// ex. dime = 234;
// ? Convert the total amount of coins into dollars (USD currency)
// ex. dimeCurrencyTotal = $20.20

let challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime'];
// let penny = 'penny';
// let nickel = 'nickel';
// let dime = 'dime';
// let quarter = 'quarter';

// // Created a variable to store the amount of times each string matched each variable
// let pennyCount = 0;

// let nickelCount = 0;
// let dimeCount = 0;
// let quarterCount = 0;

// for (let i = 0; i < challengeData.length; i++) {
//     //how am I going to pick out all the pennies?
//     //based on condition = if statements
//     if (challengeData[i] === penny) {
//         pennyCount += 1
//     } if (challengeData[i] === nickel) {
//         nickelCount += 1
//     } if (challengeData[i] === dime) {
//         dimeCount += 1
//     } if (challengeData[i] === quarter) {
//         quarterCount += 1
//     } 
// };


// // Console log out the results....
// console.log(`${penny} has a total amount of ${pennyCount} coins!!`)
// console.log(`${nickel} has a total amount of ${nickelCount} coins!!`)
// console.log(`${dime} has a total amount of ${dimeCount} coins!!`)
// console.log(`${quarter} has a total amount of ${quarterCount} coins!!`)

// let pennyValue = .01;
// let nickelValue = .05;
// let dimeValue = .10;
// let quarterValue = .25;



// let pennyTotal = pennyValue * pennyCount
// let nickelTotal = nickelValue * nickelCount
// let dimeTotal = dimeValue * dimeCount
// let quarterTotal = quarterValue * quarterCount



// console.log(`${penny} has a total of $${pennyTotal}!!!`)
// console.log(`${nickel} has a total of $${nickelTotal.toFixed(2)}!!!`)
// console.log(`${dime} has a total of $${dimeTotal.toFixed(2)}!!!`)
// console.log(`${quarter} has a total of $${quarterTotal}!!!`)

//! Grade Calculator
//? Create a program that calculates the average grade from an array of grades and determines the corresponding letter grade.
 
//TODO Define an Array: Define an array containing a list of grades.
let grades = [97, 83, 77, 65, 51]
let gradesTwo = [13, 57, 87, 78, 34]

//TODO Create a Function: Create a function to calculate the average of the grades.
function solveAverage(gradesArr) {

    let sum = 0

    for (let i = 0; i < gradesArr.length; i++) {
        sum += gradesArr[i]
    }   
    let average = sum / gradesArr.length
    return average
}
let gradesAverage = Math.floor(solveAverage(grades));
console.log(`Your average grade for the semester is ${gradesAverage}!!`)


//TODO Create Another Function: Create another function to determine the letter grade based on the average.
//TODO Use if-else Statements: Use if-else statements inside the function to determine the letter grade.
function calcLetterGrade(letterGrade) {
        if (letterGrade <= 100 && letterGrade >= 90) {
            return "A";
        } else if (letterGrade <= 89 && letterGrade >= 80) {
            return "B";
        } else if (letterGrade <= 79 && letterGrade >= 70) {
            return "C";
        } else if (letterGrade <= 69 && letterGrade >= 60) {
            return "D";
        } else {
            return "F";
        }
}

//* Output Results: Use console.log to display the average grade and the corresponding letter grade.
 

let newLetterGrade = calcLetterGrade(gradesAverage)
console.log(`The average grade you made for the semester is ${newLetterGrade}`);

//! Bank Account Manager
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
 
//TODO Define Variables: Start with a balance variable.
debugger
let bankBalance = 1733;

//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.
function bankDeposit(depositAmount) {
    if (depositAmount > 0){
        bankBalance += depositAmount
        return depositAmount;
    }
}
let totalDeposit = bankDeposit(1017);
console.log(`You made a deposit of $${totalDeposit}`);

//TODO Use if-else Statements: Use if-else statements to ensure the withdrawal amount does not exceed the balance.
//* Output Results: Use console.log to display the updated balance after each operation.

function bankWithdraw(moneyWithdraw) {
    if (moneyWithdraw > 0 && moneyWithdraw <= bankBalance){
        bankBalance -= moneyWithdraw;
        console.log(`Your withdraw was successfull! You're new balance is $${bankBalance}`);
    } else if (moneyWithdraw > bankBalance) {
        console.log(`You have insufficient funds in your account. You're balance is $${bankBalance}...`)
    } else {
        console.log("You have invalid withdraw amount...")
    }
}
let totalWithdrawl = bankWithdraw(1562)

function bankChecker(checkBalance) {
        console.log(`You hava a balance of $${bankBalance}`)
        return checkBalance;
}
let balanceChecker = bankChecker(bankBalance);
 
//! Simple To-Do List
//? Create a program that allows the user to add and display tasks in a to-do list.
 
//TODO Define an Array: Define an array to store the tasks.

let tasks = ["clean bedrooms", "sweep", "mop", "take out trash"]

//TODO Create Functions: Create functions to add a task and display the to-do list.

function addTask(newTask) {
    tasks.push(newTask);
    return tasks;
}
let brandNewTask = addTask("do the laundry");
console.log(`TO-DO LIST: \n${brandNewTask}`)

//TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the tasks.
function tasksCompleted(taskDone) {
    for (let i = 0; i < taskDone.length; i++) {
        if (taskDone[i] === "clean bedrooms" ) {
            return "I'm done with with cleaning my room!!"
        } else if (taskDone[i] === "sweep") {
            return "I'm done with sweeping the house!!"
        } else if (taskDone[i] === "mop") {
            return "I've completed doing all of the mopping!!"
        } else if (taskDone[i] === "take out trash") {
            return "I took out all of the trash!!!"
        }
    }
}
let done = tasksCompleted("clean bedrooms")
console.log(done)



//* Output Results: Use console.log to display the to-do list after each operation.
 
//! BONUS: Be able to remove a task o.o
 
 
 
//! Temperature Converter
//? Create a program that converts temperatures between Celsius, Fahrenheit, and Kelvin.
 
//TODO Define Variables: Allow the user to input a temperature value and the unit they want to convert from.
//TODO Create Functions: Create functions to convert between Celsius, Fahrenheit, and Kelvin.
//? (Hint: There will be two arguements temperature value and unit letter (Celsius, Farenheit, Kelvin))
//? ex. If I provide 25 and "C" I want the Kelvin and Farenheit temperature
 
//* KelvinToCelsius conversion:
//* kelvinNum - 273.15
 
//* celsiusToKelvin:
//* celsiusNum + 273.15
 
//* fahrenheitToCelsius:
//* (fahrenheit - 32) * 5/9
 
//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32
 
 
//TODO  Use if-else Statements: Use if-else statements to determine which conversion to perform based on the user's input.
//* Output Results: Use console.log to display the converted temperature.