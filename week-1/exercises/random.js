const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing - math,random gives a value between 0 and 1, however 0 and 1 are not included. max - min +1 is 100 so a random number multiplied by 100 is anywhere between 0 and 100 but 0 and 100 not included. then add +1 and then 100 is included. math. floor rounds the number. so this function is giving us a random number between 0 and 100

console.log(num);