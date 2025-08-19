// A function is a reusable block of code designed to perform a specific task. // 

function functionName(parameters) {
    // code to execute
    return value; // optional
} 



// Example Use case //

// Function to calculate factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
