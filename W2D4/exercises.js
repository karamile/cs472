 /* Exercise 1: Define a filter function on the String object */

 String.prototype.filter = function (banned) {
    let splitted = this.split(" ");
    return splitted.filter(s => s !== banned
    ).join(" ");
  };
  console.log("The house is not nice".filter("not"));

  /* Exercise 2: Write a BubbleSort algorithm on the Array object. */

Array.prototype.bubbleSort = function bubbleSort() {
    let swapp;
    let len = this.length - 1;
    const sortedArray = this;
    do {
      swapp = false;
      for (let i = 0; i < len; i++) {
        if (sortedArray[i] > sortedArray[i + 1]) {
          const temp = sortedArray[i];
          sortedArray[i] = sortedArray[i + 1];
          sortedArray[i + 1] = temp;
          swapp = true;
        }
      }
      len--;
    } while (swapp);
    return sortedArray;
  };
  
  /*  code for the 3rd question: creating an object */
  console.log(" \n 3. Prototype Attribute");

var Person = function () { };

Person.prototype.initialize = function (name) {
  this.name = name;
};

Person.prototype.describe = function () {
  return this.name;
};

var Teacher = function () { };
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  return (this.name + " is now teaching " + subject);
};

var teacher= new Teacher();

teacher.initialize("Prof. Michael Zijlstra");
console.log(teacher.teach("WAP"));