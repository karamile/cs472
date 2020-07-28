/* 4 Define a function sum() and a function multiply() 
that sums and multiplies (respectively) all the numbers in an array of numbers */
/* sum */
const array1 = [1, 2, 3, 4];
let initialValue = 0
const sum = array1.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  }, initialValue)
/* Alternatively written with an arrow function: */
const total = array1.reduce(( accumulator, currentValue ) => accumulator + currentValue,0)

/*multiply */
const multiply=array1.reduce(function(accumulator,currentValue){
    return accumulator * currentValue
},1)
/* Alternatively written with an arrow function: */
 const product=array1.reduce((accumulator,currentValue)=>accumulator * currentValue,1)

 /*  5 Define a function reverse() that computes the reversal of a string. */
 /* one way */
 String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
 /* secand way */
var reverse= function(str){
    return str.split('').reverse().join('');
}
/* third  way */
//String.split('').reverse().join('');

/* 7 Write a function filterLongWords() 
that takes an array of words and an integer i and returns the array of words that are longer than i. */ 
 let words = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

// function filterLongWords( string){
//     return string.length > i;
// }
// var words = strings.filter(filterLongWords);
 /* second way */
// let filterLongWords2 = words.filter(word => {
//     return word.length > i;
// })
 /* third  way */
const filterLongWords1 = (words, length) => words.filter(str => str.length > length);