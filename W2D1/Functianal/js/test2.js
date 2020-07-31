x= 1;
var a = 5;
var b = 10;
var c = function(a, b, c){
console.log(x);
document.write(x);
 
console.log(a);
document.write(a);


 
var f = function(a, b, c){
b = a;
 
console.log(b);
document.write(b);
b = c;
var x = 5;
 
}
 
f(a, b, c);
console.log(b);
document.write(b);
var x = 10;
 
}
 
c(8, 9, 10);
console.log(b);
document.write(b);
 
console.log(x);
document.write(x);

var foo=1;
function bar(){
    if(!foo){
        var foo=10;
    }
    alert(foo);
    console.log(foo);
}
bar();

var a =10;
function outer(){
    var b=a;
    console.log(b);
    function inner(){
        var c =b;
        console.log(c)
        var b=20;
    }
    inner();
}outer();

const circle={
    redius:1,
    get area(){
        return Math.PI*this.redius*this.redius;
    }
};
circle.redius=2;
console.log(circle.area);



var count= (function(){
    let counter=0;
    return{
        //value: counter,//Closure

        // get: function(){return counter;},
        // set: function(value){counter = value},
        add: function(){
          counter+=1;
          console.log("increament "+counter);
        },
        reset: function(){
            counter=0;
            console.log("After reset  "+counter); 
        }
    }

})();
//add.set(7);
count.add();
count.add();
count.add();
count.add();
count.add();
//console.log(count.get());

count.reset();
//console.log(count.get());

var x = 5;
var y = test();
var b = { x: 4 };
var z = y.bind(b);
z();
function test() {
    console.log(this);
    console.log(x);
    var z = function() {
        var x = 3;
        console.log(this);
        console.log(this.x);
    }
    var x = 8;
    z();
    return z;
}

let VALIDATOR = (function() {
    function validateFirstName() {
        return document.getElementById("first").value !== "";
    }
    function validateLastName() {
        return document.getElementById("last").value !== "";
    }
    function validateBoth() {
        return validateFirstName() && validateLastName();
    }
    return {
        validate : validateBoth
    }
})();

Array.prototype.bubbleSort_algo = function() 
{
var is_sorted = false;
 while (!is_sorted) 
 {
    is_sorted = true;
    for (var n = 0; n < this.length - 1; n++) 
    {
      if (this[n] > this[n+1]){
        var x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;
};

console.log([6,4,0, 3,-2,1].bubbleSort_algo());



String.prototype.filter = function(word){
    return this.replace(" " + word, "");
}
console.log("This house is not nice!".filter('This'));

// var newArray= array.forEach(word => { word!==('not')
    
// });


String.prototype.filter = function (banned) {
    let splitted = this.split(" ");
    return splitted.filter(s => s !== banned
    ).join(" ");
  };
  console.log("This house is not nice!".filter('not'));
