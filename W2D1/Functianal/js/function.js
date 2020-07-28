/* 4 Define a function sum() and a function multiply() 

  /*  sum takes an array and returns the sum */
  function sum(n) {
    return n.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    },0)
}

/* multipy takes an array and returns the result */
function multiply(n) {
    return n.reduce(function(previousValue, currentValue) {
        return previousValue * currentValue;
    },1)
}

//  /*  5 Define a function reverse() that computes the reversal of a string. */

var reverse= function(str){
    return str.split('').reverse().join('');
}
// /* third  way */
// //String.split('').reverse().join('');

// /* 7 Write a function filterLongWords() 
// that takes an array of words and an integer i and returns the array of words that are longer than i. */ 
//  let words = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

 const filterLongWords = (words, length) => words.filter(str => str.length > length);
 
 
  
 

