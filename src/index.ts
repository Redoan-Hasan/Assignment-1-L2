// Problem 1:
// Description: Create a function that takes a string and an optional boolean.

// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.
// Function Signature:

// function formatString(input: string, toUpper?: boolean): string
// Example:

// formatString("Hello");          // Output: "HELLO"
// formatString("Hello", true);   // Output: "HELLO"
// formatString("Hello", false);  // Output: "hello"

function formatString(inputOne:string, inputTwo?:boolean):string{
    if(inputTwo !== false){
        return inputOne.toUpperCase();
    }
    else{
        return inputOne.toLowerCase();
    }
}
console.log( formatString("Hello", false));