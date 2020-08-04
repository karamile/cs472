// x= 1;
// var a = 5;
// var b = 10;
// var c = function(a, b, c){
// console.log(x);
// document.write(x);
 
// console.log(a);
// document.write(a);


 
// var f = function(a, b, c){
// b = a;
 
// console.log(b);
// document.write(b);
// b = c;
// var x = 5;
 
// }
 
// f(a, b, c);
// console.log(b);
// document.write(b);
// var x = 10;
 
// }
 
// c(8, 9, 10);
// console.log(b);
// document.write(b);
 
// console.log(x);
// document.write(x);

// var foo=1;
// function bar(){
//     if(!foo){
//         var foo=10;
//     }
//     alert(foo);
//     console.log(foo);
// }
// bar();

// var a =10;
// function outer(){
//     var b=a;
//     console.log(b);
//     function inner(){
//         var c =b;
//         console.log(c)
//         var b=20;
//     }
//     inner();
// }outer();

// const circle={
//     redius:1,
//     get area(){
//         return Math.PI*this.redius*this.redius;
//     }
// };
// circle.redius=2;
// console.log(circle.area);



// var count= (function(){
//     let counter=0;
//     return{
//         //value: counter,//Closure

//         // get: function(){return counter;},
//         // set: function(value){counter = value},
//         add: function(){
//           counter+=1;
//           console.log("increament "+counter);
//         },
//         reset: function(){
//             counter=0;
//             console.log("After reset  "+counter); 
//         }
//     }

// })();
// //add.set(7);
// count.add();
// count.add();
// count.add();
// count.add();
// count.add();
// //console.log(count.get());

// count.reset();
// //console.log(count.get());

// var x = 5;
// var y = test();
// var b = { x: 4 };
// var z = y.bind(b);
// z();
// function test() {
//     console.log(this);
//     console.log(x);
//     var z = function() {
//         var x = 3;
//         console.log(this);
//         console.log(this.x);
//     }
//     var x = 8;
//     z();
//     return z;
// }

// let VALIDATOR = (function() {
//     function validateFirstName() {
//         return document.getElementById("first").value !== "";
//     }
//     function validateLastName() {
//         return document.getElementById("last").value !== "";
//     }
//     function validateBoth() {
//         return validateFirstName() && validateLastName();
//     }
//     return {
//         validate : validateBoth
//     }
// })();

// Array.prototype.bubbleSort_algo = function() 
// {
// var is_sorted = false;
//  while (!is_sorted) 
//  {
//     is_sorted = true;
//     for (var n = 0; n < this.length - 1; n++) 
//     {
//       if (this[n] > this[n+1]){
//         var x = this[n+1];
//         this[n+1] = this[n];
//         this[n] = x;
//         is_sorted = false;
//       }
//     }
//   }
//   return this;
// };

// console.log([6,4,0, 3,-2,1].bubbleSort_algo());



// String.prototype.filter = function(word){
//     return this.replace(" " + word, "");
// }
// console.log("This house is not nice!".filter('This'));

// // var newArray= array.forEach(word => { word!==('not')
    
// // });


// String.prototype.filter = function (banned) {
//     let splitted = this.split(" ");
//     return splitted.filter(s => s !== banned
//     ).join(" ");
//   };
//   console.log("This house is not nice!".filter('not'));

var b = 5;
var c = hello(b);
var a = 1000;
var d = {a: 50, b: 90};
console.log(c.apply(d));
function hello(a) {
    console.log(this);
    a = a * 2;
    console.log(bye())
    function bye() {
        console.log(this);
        console.log(b);
        console.log(this.b);
        return a;
    }
    var b = 100;
    return bye;
}






let CAR = (function () {
    let carSpeed = 0;
    let direction = 0;
    return {
        gasPaddle: function () {
            carSpeed += 5;
            if (carSpeed > 120) {
                alert('your or over the speed limit reduce to 120');
                carSpeed = 120;
            }
        },
        break: function () {
            carSpeed -= 10;
            if (carSpeed < 0) {
                alert('your are taking and under the speed limit');
                carSpeed = 0;
            }
        },
        turnLeft(degrees) {
            direction -= degrees;
            alert('turn left');
        },
        turnRight(degrees) {
            direction += degrees;
            alert('turn right');
        },
        status() {
            console.log("The car is driving direction " + direction + " at " + carSpeed+ "mph")
        }
    };
})();


function Computer() {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;
}

Computer.prototype.runProgram = function(program) {
    console.log("Running program" + program);
};
function Laptop(ram, cpu, storage, battery) {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;
    this.battery = battery;
}
Laptop.prototype.__proto__ = Computer.prototype;
Laptop.prototype.carryAround = function() {
    console.log("carrying laptop: cpu " + this.cpu +" ram: " 
    + this.ram + " storage: " 
    + this.storage + " battery: " + this.battery);
};

let laptop = new Laptop("1.6Ghz", "8GB", "1TB", "75%");
laptop.runProgram();
laptop.carryAround();
