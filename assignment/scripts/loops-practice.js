console.log('****** Loops Practice *******');

// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');

// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

// change comparison to i<6
for (let i=0; i<6; i++) {
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

// change i to 3 so that loop starts at 3.
for (let i=3; i<6; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

// Does this work? Counting by 2's from 2 to 10.
for (let i=2; i<11; i+=2) {
  console.log(i);
}

// Another way I found while Googling. Add an if statement with the remainder operator (%) and divide each number by 2. If the remainder is exactly 0 then it will log the number giving only even numbers. Set comparison to less than 11 so that the loop stops at 10. This method checks if number is even rather than counting by 2's. Source: https://wsvincent.com/javascript-print-odd-or-even-numbers/
for (let i=1; i<11; i++){
  if(i % 2 === 0) {
    console.log(i);
  }
}

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let i=5; i>-1; i--) {
  console.log(i);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let name of stars) {
  console.log(name);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

// I struggled with this one and figuring out how to use the array.length I used these sources to piece it together: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length and https://www.w3schools.com/js/js_loop_while.asp
let i = 0;
while (i < stars.length){
  console.log(stars[i]);
  i++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let index = 0;
const max = 6;
while(index < max){
  console.log(index);
  index++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

// I enclosed the whole code block in curly brackets because I was getting an error that 'index' had already been defined. Does this work? Based on some Googling it has to do with 'let' being block scoped throughout the whole program. I need some help with this. Source: https://stackoverflow.com/questions/53613456/wrapping-an-entire-js-code-block-within-in-es6
{let index = 10;
while(index > 4){
  console.log(index);
  index--;
}}
