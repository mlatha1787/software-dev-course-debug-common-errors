/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.
// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// Error Type: Syntax Error
// What's Wrong:
// The original code had a missing closing quote and parenthesis which causes a parse error.
// Fix: close the string and the parentheses and end the statement with a semicolon.
console.log("Welcome to the bootcamp");


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results.

// Error Type: Runtime Error (invalid array element type)
// What's Wrong:
// The array contains a non-numeric string ("eight"). Multiplying it directly produces NaN and may indicate bad input.
// Fix: coerce each value to a number and skip or report invalid entries.

let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  const raw = numbers[i];
  const n = Number(raw);
  if (Number.isNaN(n)) {
    console.log(`Skipping invalid number at index ${i}: ${JSON.stringify(raw)}`);
    continue;
  }
  let doubled = n * 2;
  console.log(doubled);
}


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself).

// Error Type: Logic Error
// What's Wrong:
// The original function returned true when a divisor was found (meaning NOT prime) and false otherwise.
// Fix: return false when a divisor is found; return true after checking all divisors.

function isPrime(num) {
  if (num < 2) return false;
  // Only check divisors up to sqrt(num)
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false; // not prime
    }
  }
  return true; // prime
}

// Verification
console.log('isPrime(7) ->', isPrime(7)); // Expected: true
console.log('isPrime(4) ->', isPrime(4)); // Expected: false
console.log('isPrime(2) ->', isPrime(2)); // Expected: true
console.log('isPrime(1) ->', isPrime(1)); // Expected: false
