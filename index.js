// Code your solutions in this file
// Function to create thank-you cards
function writeCards(names, event) {
    let messages = []; // Create an empty array to store messages
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return messages; // Return the array of messages
  }
  
  // Function to count down from a given number to 0
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--; // Decrement the number each iteration
    }
  }
  
  // Exporting functions for testing
  module.exports = { writeCards, countDown };
  