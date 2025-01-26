//DECLARING VARIABLES
let name = "Tracy Mugure";            // String
let age = 25;                     // Number
let isStudent = true;             // Boolean
let subjects = ["DSA", "IAP", "COA"];  // Array
let studentInfo = {              // Object
    id: 12345,
    major: "Computer Science"
};

// Printing the values and types of the variables
console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is student: " + isStudent + " (Type: " + typeof isStudent + ")");
console.log("Subjects: " + subjects + " (Type: " + typeof subjects + ")");
console.log("Student Info: " + JSON.stringify(studentInfo) + " (Type: " + typeof studentInfo + ")");


// Simple Calculator
function calculator() {
    // Get user input
    let Fnum = parseFloat(prompt("Enter  first number:"));
    let Snum = parseFloat(prompt("Enter  second number:"));
    let operation = prompt("Choose  operation (+, -, *, /):");

    // Validating input for numbers
    if (isNaN(Fnum) || isNaN(Snum)) {
        alert("Invalid input. ");
        return;
    }

   //arithmetic Operations
    let result;

    if (operation === "+") {
        result = Fnum + Snum;
    } else if (operation === "-") {
        result = Fnum -Snum;
    } else if (operation === "*") {
        result = Fnum * Snum;
    } else if (operation === "/") {
        if (Snum === 0) {
            alert("Error: Cannot divide by zero.");
            return;
        }
        result = Fnum / Snum;
    } else {
        alert("Invalid operation. Please choose +, -, *, or /.");
        return;
    }

   
    alert("Result: " + result);
}

// Calling function
calculator();


//Greeting User
function greetUser(name) {
    return "Hello, " + name + "! Welcome!";
}


// Function to display the greeting in the HTML element

function displayGreeting() {
    // Getting the name entered by the user
    let userName = document.getElementById("userName").value;

    // Calling the greetUser function and store the greeting message
    let message = greetUser(userName);

    // Displaying the greeting message in the <h2> element
    document.getElementById("greetingMessage").textContent = message;
}

//Function for voter eligibility
function checkVotingEligibility() {

    // Ask for the user's age
    let age = parseInt(prompt("Enter your age:"));

    // Validate the input and display appropriate messages
    if (isNaN(age)) {
        document.getElementById("eligibilityMessage").textContent = "Please enter a valid number.";
    } else if (age >= 18) {
        document.getElementById("eligibilityMessage").textContent = "You are eligible to vote!";
    } else {
        document.getElementById("eligibilityMessage").textContent = "You are not eligible to vote yet.";
    }
}

// Function to display numbers from 1 to 10 in an ordered list

function displayNumbers() {

    // Get the ordered list element
    let numberList = document.getElementById("numberList");

    // Loop through numbers from 1 to 10
    for (let i = 1; i <= 10; i++) {
        // Create a list item for each number
        let listItem = document.createElement("li");
        listItem.textContent = i;

        // Append the list item to the ordered list
        numberList.appendChild(listItem);
    }
}

// Calling the function to display numbers from 1 to 10
displayNumbers();

//SELECTING AND MODYFYING ELEMENTS

        // Changing the text of the <h1> element
        const heading = document.querySelector("h1");
        heading.textContent = "JavaScript in Action!";

        // Adding a new <p> inside the <div> with id="dynamic-content"
        const dynamicContentDiv = document.getElementById("dynamic-content");

        // Creating a new <p> element
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "This content was added dynamically using JavaScript.";

        // Appending the <p> to the dynamic-content <div>
        dynamicContentDiv.appendChild(newParagraph);