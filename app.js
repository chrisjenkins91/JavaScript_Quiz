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

//! Multiple Checker
//? Create a program that checks if the elements in an array of numbers are multiples of a specific number and displays a message accordingly.

//TODO Define an array containing a list of numbers.
let num = [21, 42, 56, 87, 35]
let multiple = 3;
//TODO Define a variable for the specific number to check multiples of.
//*Output Results: Use console.log to display the results.

for (let i = 0; i < num.length; i++) {
    if (num[i] % multiple === 0) {
        console.log(`${num[i]} is a multiple of ${multiple}`)
    } else {
        console.log(`${num[i]} is not a multiple of ${multiple}`)
    }
};


//! Age Group Categorizer
//? Create a program that categorizes the ages in an array as 'child', 'teen', 'adult', or 'senior' based on their values.
//TODO Define an array containing a list of ages.
//*Output Results: Use console.log to display the age categories.

let ages = [4, 16, 35, 61]

for (let i = 0; i < ages.length; i++) {
    if (ages[i] <= 12) {
        console.log("You are a child...")
    } else if (ages[i] >= 13 && ages[i] <= 18) {
        console.log("You are a teen..")
    } else if (ages[i] >= 19 && ages[i] <= 60) {
        console.log("You are now an adult...")
    } else {
        console.log("You are now a senior citizen...")
    };
};

//! Palindrome Checker
//? Create a program that checks if the elements in an array of strings are palindromes and displays a message accordingly.
//TODO Define an array containing a list of strings.
//*Output Results: Use console.log to display the results.

let words = ["lemon", "rotor", "code", "civic"];

for (let i = 0; i < words.length; i++) {
    let rev = words[i].split("").reverse().join("");

    if (words[i] === rev) {
        console.log(`${words[i]} is a palindrome...`)
    } else {
        console.log(`${words[i]} is not a palindrome... `)
    };
};




//! Prime Number Checker
//? Create a program that checks if the elements in an array of numbers are prime and displays a message accordingly.
//TODO Define an array containing a list of numbers.

let numbers = [19, 59, 101, 6, 0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <)
}





//*Output Results: Use console.log to display the results.

//! Uppercase Cechker
//? Create a program that checks if the elements in an array of strings are in uppercase and displays a message accordingly.
//TODO Define an array containing a list of strings.
//*Output Results: Use console.log to dislay  the results.

let months = ["May", "DECEMBER", "APRIL", "july"]

for (let i = 0; i < months.length; i++) {
    if (months[i] === months[i].toUpperCase()) {
        console.log(`${months[i]} is all uppercase!!!`)
    } else {
        console.log(`${months[i]} is not in uppercase...`)
    };

};


