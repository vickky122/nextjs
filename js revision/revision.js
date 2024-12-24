// // // console.log("hello");
// // // console.log(2+3);


// // //Primitive/value types
// // //variable
// // let x="vikrant";
// // console.log(x);
// // console.log(typeof x);
// // x=null;
// // console.log(typeof x);//changes into object
// // //we can change the type of the variables thats why it is known as dynamic variable

// // let y =1;
// // console.log(y);
// // console.log(typeof y);

// // let z=true;
// // console.log(z);
// // console.log(typeof z);


// // let w;
// // console.log(w);
// // w="vikrant";
// // console.log(typeof w);




//  //Referance types- objects, arrays, functions
//  //Objects
// // let obj={
// //   name:"vikrant",
// //   age:101,
// //   height:5.11
// // };
// // console.log(obj);
// // console.log(typeof obj);
// // console.log(obj.name);
// // console.log(obj['name']);
// // console.log(obj.age);
// // console.log(obj.height);


// // //Value types VS Reference types
// // let x="vikrant";  
// // let y=x;

// // x="yadav";
// // console.log(x);
// // console.log(y); //only value got copied thats why it is known as value types

// // let p={
// //   name:"vikrant",};
// //   let q=p;

// //   p.name="yadav";
// //   console.log(p);
// //   console.log(q);
// //   //reference got copied by q thats why it is known as reference types



// // //Arrays
// // let arr=[1,2,3,4,5,'vikrant',true];
// // console.log(arr);
// // console.log(typeof arr);
// // console.log(arr[2]);  
// // //baasically arrays are also an object only



// //Hoisting: USing the variables before declaring them
// // //Functions
// //creating task again and again
// function task(morning){
//   console.log("wake up at"+morning);
// }
// task(9);
// task(10);
// task(11);


// vikrant("yadav");
// console.log(x);//output stops here as let y has been used instead of var
// console.log(y);


// function vikrant(name){
//   console.log("hello my name is "+name);
// }
// var x=10;
// console.log(x) ;
// vikrant('vikrant');
// vikrant("mani");
// let y=20;
// console.log(y);

// /*The output stops when let y is used because of the Temporal Dead Zone (TDZ) in JavaScript, which is a behavior specific to let and const declarations.

// Explanation:
// Temporal Dead Zone (TDZ):

// Variables declared with let and const are not hoisted in the same way as var.
// During the execution, from the start of the block where let y is declared until its actual initialization (let y = 20), the variable exists in a "dead zone." Any attempt to access it before its initialization results in a ReferenceError.
// javascript
// Copy code
// let y = 20; // y is not accessible before this line.
// console.log(y); // This is valid only after this declaration.
// Behavior of var:

// Variables declared with var are hoisted to the top of their function or global scope.
// The variable is initialized with undefined until the line where it is explicitly assigned a value.
// javascript
// Copy code
// var y = 20; // y is hoisted and accessible even before this line.
// console.log(y); // Outputs 20 or undefined if accessed before assignment.
// Your Code Behavior:
// When you use let y, the line console.log(y) before the let initialization attempts to access y while it is still in the TDZ, causing a ReferenceError.
// When you replace let with var, y is hoisted and initialized with undefined, allowing the code to proceed without interruption.
// Corrected Code:
// To avoid the error, either declare let y before using it or use var:

// javascript
// Copy code
// // Using let correctly:
// let y = 20;
// console.log(y); // Outputs: 20
// Or, with var:

// javascript
// Copy code
// var y = 20;
// console.log(y); // Outputs: 20
// */





// //Global Execution Context(GEC)- how js is executed
// //Execution COntext
// //1. Memory Phase :variable environment
// //2. Execution Phase/Code Phase:execution environment
// //3. Result Phase:output

// //Global Phase:global environment







// //Window and this
// console.log(a);
// console.log(this.a);
// console.log(window.a);

// var a=1;

// console.log(a);
// console.log(this.a);
// console.log(window.a);

// console.log(window);
// console.log(this === window);










//Temporal Dead Zone (TDZ): mainly occur for const and let
//const, let and var
// const and let are blocked scoped while var is function scoped

//while initialising with const, let and var, only var is within the global execution context and the rest two are in the temporal dead zone

// {
//   const a=1;
//   let b=2;
//   var c=3;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// //console.log(a);//give reference error as it cant be accessed outside the block
// //console.log(b);//give reference error as it cant be accessed outside the block
// console.log(c); 










// //Lexical scope: local and global scope
// //Local scope: variables declared inside a function
// //Global scope: variables declared outside a function

// function hello(){
//   let a=10;
//   console.log(a);
// }
// let a=100;
// hello();
// //OUTPUT : 10 , beacuse a is local to hello function

// function hi(){
  
//   console.log(b);
// }
// let b=100;
// hi();
// //console.log(a);//output : 100 , beacuse a is global to the whole program








// //Functinos are called first class citizen in javascript
// function add(a,b){
//   return a+b;
// }

// console.log(add);
// console.log(add(2,3));
// //output:script and global generated fo rthe function

// let sum=function(a,b){
//   return a+b;
// }

// console.log(sum);
// console.log(sum(2,3));
// //output: local, script and global created for the variables not for the functions 


function sum(a,b){
  return a+b;
}

function diff(a,b ){
  return a-b;
}

function multiply(a,b){
  return a*b;
}

function operate(operatefunct,a,b){
  return operatefunct(a,b);
}

console.log(operate(sum,2,3));
console.log(operate(diff,2,3));
console.log(operate(multiply,2,3));