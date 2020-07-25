function functionTester(expected, found) {

    // Checks if the arguments are array, if so it will compare element by element
    if(Array.isArray(expected) && Array.isArray(found)){
        if(expected.length !== found.length){
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }else{
            for(let i=0; i<expected.length; i++){
                if(expected[i] !== found[i]){
                    return "TEST FAILED.  Expected " + expected + " found " + found;
                }
            }

            return "TEST SUCCEEDED";
        }
    }else {
        if (expected === found) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }    
}

/* function max() that takes two numbers as arguments and returns the largest of them */
function max(firstNum, secondNum){
  
    if (firstNum > secondNum) {
       console.log(firstNum + " is larger than " + secondNum);
    } else {
        console.log(firstNum + " is less than " + secondNum);
    }
    return;
  
}
// Lets set two numbers
max(142,234);
var number = prompt(" Welcome Professor, Enter Any text  then ok");
document.write("Emile "+ number);
/*  function maxOfThree() that takes three numbers */
function maxOfThree(firstNum,secondNum,thirdNum){
    if(firstNum>secondNum && firstNum>thirdNum){
        return firstNum;
    }else if(secondNum>firstNum && secondNum>thirdNum){
        return secondNum;
    }else {
        return thirdNum;
    }
}
/*Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */
function isVowel( char){
    if(!char || char.length > 1){
        return false;
    } else{
        // Convert to lower case letter
        char = char.toLowerCase();
    if(char=='a'||char=='e'||char=='i'|| char=='o'||char=='u'){
        return true;
    }else{
        return false;
    }
    }
}

/*Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. */
/* sum function */
function sum(arr){
    let  total = 0.0;
    
    arr.map(function(item){
        total += item;
    });

    return total;
}
/* Set multiplication */
function multiply(arr){
    let product = 1.0;
    
    arr.map(function(item){
        product *= item;
    });
    
    return product;
}

let nums = [1,2,3,4],
    x = sum(nums) + ' ' + multiply(nums);
    /*let array = [1, 2, 3, 4],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p);  */
/*----------------------------------------------------------------------------------------------------------- */
/*Define a function reverse() that computes the reversal of a string. 
For example, reverse("jag testar") should return the string "ratset gaj". */
function reverse(str){
    var text = '';
    
    for (var i = str.length - 1; i >= 0; i--) {
    	text += str[i];
    	continue
    }
    return text.toLowerCase();
}
    console.log(reverse("jag testar"));
// document.getElementById("validators").innerHTML = y;

/*Write a function findLongestWord() that takes an array of words and returns the length of the longest one. */
function find_longest_word(str)
{
    if(!str || str.length == 0){
        return "Empty Array";
    }

    let maxLength = -1;

    for(let i=0; i<str.length; i++){

        let len = str[i].length;

        if(len > maxLength){
            maxLength = len;
        }
    }

    return maxLength;
}
console.log(find_longest_word('Web Development Tutorial'));

/*Write a function filterLongWords() that takes an array of words and an integer i and 
returns the array of words that are longer than i. */

let filterLongWords = function (arr, integer) {
   let longWords = [];
    for(var i = 0; i < arr.length; i++) {
      if (arr[i].length > integer){
        longWords.push(arr[i]);
      }
    }
    return longWords;
  }
  
  filterLongWords(["Aimable", "Hong", "Tina", "number", "longest"], 3);

// All function test cases are down here
console.log("\t\t\tTest Cases");
console.log("\t\t\t-----------");

// 1. Testing the max() function
console.log("Testing the max() function");
// Pass test case
console.log("\tExpected output of max(20,10) is 20  " + functionTester(20, max(20, 10)));
// Fail test case
console.log("\tExpected output of max(25,55) is 55  " + functionTester(25, max(25, 55)));

// 2. Testing the maxOfThree() function
console.log("Testing the maxOfThree() function");
// Pass test case
console.log("\tExpected output of maxOfThree(5,4,44) is 44  " + functionTester(44, maxOfThree(5, 4, 44)));
console.log("\tExpected output of maxOfThree(55,4,44) is 55  " + functionTester(55, maxOfThree(55, 4, 44)));

// Fail test case
console.log("\tExpected output of maxOfThree(55,4,44) is 55  " + functionTester(4, maxOfThree(55, 4, 44)));

// 3. Testing the isVowel() function
console.log("Testing the isVowel() function");
// Pass test case
console.log("\tExpected output of isVowel('e') is true  " + functionTester(true, isVowel("e")));
console.log("\tExpected output of isVowel('I') is true  " + functionTester(true, isVowel("I")));

// Fail test case
console.log("\tExpected output of isVowel('d') is false  " + functionTester(true, isVowel("d")));
console.log("\tExpected output of isVowel('A') is true  " + functionTester(false, isVowel("A")));

// 4. Test cases for sum() function
console.log("Testing the sum() function");
// Pass test case
console.log("\tExpected output of sum([1, 2, 3, 4, 5, 6]) is 21  " + functionTester(21, sum([1, 2, 3, 4, 5, 6])));
// Fail test case
console.log("\tExpected output of sum([1, 2, 3, 4, 5, 6]) is 21 " + functionTester(25, sum([1, 2, 3, 4, 5, 6])));

// 5. Test cases for multiply() function
console.log("Testing the multiply() function");
// Pass test case
console.log("\tExpected output of multiply([1, 2, 3, 4, 5, 6]) is 720  " + functionTester(720, multiply([1, 2, 3, 4, 5, 6])));
// Fail test case
console.log("\tExpected output of multiply([1, 2, 3, 4, 5]) is 120  " + functionTester(360, multiply([1, 2, 3, 4, 5])));

// 6. Test cases for reverse() function
console.log("Testing the reverse() function");
// Pass test case
console.log("\tExpected output of reverse('Computer') is  retupmoC " + functionTester("retupmoC", reverse("Computer")));
// Fail test case
console.log("\tExpected output of reverse('WOW') is  WOW " + functionTester("MOM", reverse("WOW")));

// 7. Test cases for findLongestWord() function
console.log("Testing the findLongestWord() function");
// Pass test case
console.log("\tExpected output of findLongestWord(['Harrison', 'Emile', 'Gisele']) is  6 " + functionTester(6, find_longest_word(["Harrison", "Emile", "Gisele"])));
// Fail test case
console.log("\tExpected output of findLongestWord(['Nema', 'Nene', 'Nana']) is  3 " + functionTester(1, find_longest_word(['Nema', 'Nene', 'Nana'])));

// 8. Test cases for filterLongWords() function
console.log("Testing the filterLongWords() function");
// Pass test case
console.log("\tExpected output of filterLongWords(['Harrison', 'Michael', 'Indira', 'Manzi'], 5) is [Harrison, Michael,Indira]  " + functionTester(["Harrison", "Michael"], filterLongWords(["Michael", "Indira", "Harrison", "Manzi"], 5)));
console.log("\tExpected output of filterLongWords(['1', '11', '111'], 10) is []  " + functionTester([], filterLongWords(["1", "11", "111"], 10)));
// Fail test case
console.log("\tExpected output of filterLongWords(['1', '11', '111'], 0) is 1, 11, 111  " + functionTester(["111"], filterLongWords(["1", "11", "111"], 0)));
