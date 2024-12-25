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


// function sum(a,b){
//   return a+b;
// }

// function diff(a,b ){
//   return a-b;
// }

// function multiply(a,b){
//   return a*b;
// }

// function operate(operatefunct,a,b){
//   return operatefunct(a,b);
// }

// console.log(operate(sum,2,3));
// console.log(operate(diff,2,3));
// console.log(operate(multiply,2,3));

//ALl functions in javascript are first class citizen
//Higher order functions- functions that take other functions as parameters or return functions

//here operate is a higher order function because it takes another function as a parameter



















//ARROW FUNCTION initial thought process
// let sum=(a,b) => {
//   return a+b;
// }

// let diff=(a,b)=>{
//   return a-b;
// }

// let multiply=(a,b)=>{
//   return a*b;
// }

// function operate(operatefunct,a,b){
//   return operatefunct(a,b);
// }

// console.log(operate(sum,2,3));
// console.log(operate(diff,2,3));
// console.log(operate(multiply,2,3));

// //arrow function final implementation
// let sum=(a,b)=>a+b;
// let diff=(a,b)=>a-b;
// let multiply=(a,b)=>a*b;

// // function operate=(func,a,b)=> func(a,b);

// console.log(sum(2,3));
// console.log(diff(2,3)); 
// console.log(multiply(2,3));









//lexical scope:we can call another function inside a function
//Lexical scope + Function = Closure
// Closure is a combination of Lexical scope and Function in which a function has access to the variables of its parent function


// let a=10;
// function outer(){
//   a=20;
//   function inner(){
//     console.log(a);
//   }
//   return inner;
// }
// a=100; //giving output as 20
// let returnedfunction=outer();
// a=200; // now giving 200
// console.log(returnedfunction);
// returnedfunction();

//closure example
// function outer(){
//   let count=0;
//   function inner(){
//     count++;
//     console.log(count);
//   }
//   return inner;
// } 

// let increment=outer();
// increment();
// increment();
// increment();
//we should use closure when we want to call a function inside another function and it should be limited beacuse a lot of memory leaks can occur and it leads to performance issues





















//CALLBACKS : i WILL CALL BACK LATER
// A callback is a function passed as an argument to another function and it will run after some operartion has successfully completely finished like in the balow example setTimeout is being called after 5 seconds and then the callback function will run

//DIFFERENCE BETWEEN EVENT QUEUE AND EVENT LOOP
// An event loop is an endless loop, which waits for tasks, executes them, and then sleeps until it receives more tasks. The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task. The event loop allows us to use callbacks and promises.
//SO it might possible that the data can take not exactly 5 seconds to load but will take at least 5 seconds to run the callback function.(may take 6,7,... seconds )

// When you pass a function as an argument, remember not to use parenthesis.

// Right: myCalculator(5, 5, myDisplayer);

// Wrong: myCalculator(5, 5, myDisplayer());

// function fetchdata(callback){
//   setTimeout(()=>{
//     let data="some data";
//     callback(data,null);
//   },5000);
// }

// function handleData(data,err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data);
//   }
// }

// console.log("fetching data");
// fetchdata(handleData);




















//PROBLEM IN USING CALLBACKS : the event will keep on running like in the below and we will stuck in that state and sometimes it is very hard t figure out such problems
// asyncoperation1(args,(result1)=>{
//   asynoperation2(result1,(result2)=>{
//     asyncoperation3(result2,(result3)=>{
//       //and so on
//     });
//   });
//});
//such type of consition known as CALLBACK HELL/ PYRAMID OF DOOM 
//also known as INVERSION OF CONTROL as we can not control it
//to solve this problem we use PROMISES













//PROMISES: Promises are the objects and it actually handles the state of an asynchronous operation that represents whethere the state is in the pending, fullfilled or rejected
//promise is a javascript object that represents the eventual completion or failure of an asynchronous operation

//3 states: pending, fullfilled and rejected
//Problem of asynchronous operation is being solved by promises and it =has then and catch methods which is used to handle the state of the promise and also which event is being going to handle after this certain operation.
//like in swiggy payment then notificatino then the order will be delivered

// function getData(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       let data="some data";
//       resolve(data);
//       //reject("error captured");
//     },5000);
//   })
// }

// // getData()
// //         .then(result=>{
// //           console.log(result);
// //         })
// //         .catch(error=>{
// //           console.error(error);
// //         })

// async function fetchData(){
//   try{
//     const result=await getData();
//     console.log(result);
//   }catch(error){
//     console.error(error);
//   }
// }
// fetchData();

//async and await is being used in place of then method as it is efficienter than then method which contain try and catch method which handles the state of the promise and also throw the error if we get something in it














//HIGHER ORDER FUNCTIONS : functions that take other functions as parameters or return functions
// 1. map()
// 2. filter()
// 3. reduce()

//1.MAp
const nums=[1,2,3,4,5];;
console.log(nums);
const newnums= nums.map((num)=> 2*num); 
console.log(newnums);

//2.filter

const nums1=[1,2,3,4,5];
console.log(nums1);
const newnums1=nums1.filter((num)=>num%2==0);
console.log(newnums1);

