// "use strict";

// alert("I'm JavaScript");

// let message=50;
// let user="Abhishek";
// let age=19;

// let $=1;
// let _=2;

// alert($+_);

// some mind boggoling things here-----------------------------------------------------------
// let a=15;

// function harsh(a){
//      a=20;
//      console.log(a)
    
// }


// harsh(12);
// console.log(a)
// --------------------------------------------------------exit---------------------------------------

// let admin;
// let user;

// user="Jhon";
// admin=user;
// alert(admin);
// alert(user);
// alert(`this is ${admin}`);

// let name= prompt("What is the official name of JavaScript? ",' ');

// if(name == "ECMAScript"){
//     alert("Right!");
// }else{
//     alert("You don't know ECMAScript?");
// }


// let variable1=10;
// variable1=20;

// const variable2="10";

// console.log(variable1,variable2);

// const object1={prop1:"hello",prop2:"world"};
// console.log(object1.prop1+" "+object1.prop2)

// console.log("hello"/20);

// const obj1={
//     prop1:"some value",
//     prop2:20
// };
// const obj2={
//     prop1:"some value",
//     prop2:20
// };

// const myArray=[1,2,3,4,5];
// const myArray2=[1,2,3,4,5];


// console.log(myArray===myArray2);
// console.log(obj1===obj2);
// console.log(22>="hello");


// const result= 20==20 || 30==31 ?"values match":"do not match";
// console.log(result)


// if(!true){console.log("Yes")} else{console.log("No")}


// color=["red","blue","green","orange","black","white"]
// randomIndex=Math.floor(Math.random()*color.length)

// const randomColors=color[randomIndex]

// console.log(randomColors)
// switch(randomColors){
//     case "orange":
//         console.log("This is orange")
//         break
//     case "green":
//         console.log()
//     default:
//         console.log("no color found")        
// }




// -----------------------------TO IMMEDIATELY INVOKE  A FUNCTION ------------------------
// (function myFunction(){
//     console.log("Hello This is my funciton");
// })();

// function myFunction1(Pram1,Pram2){
//     console.log(Pram1);
//     console.log(Pram2);

// }
// myFunction1("ABhishek","Singh");


// const arrowFunction =()=>{
//     console.log("This is an arrow function");
// }
// arrowFunction();

    
    
// function callback(someNumber){
//     return someNumber*2;
// }
// function mainFunction(randomNumber,shouldcall,callback){
//     let result =randomNumber;
    
//     if(shouldcall){
//         result = callback(randomNumber);
//     }
//     return result;

// }

// console.log(mainFunction(3,true,callback));

// console.log(mainFunction(20,true,(num)=>num *3))


// const myArray=[1,2,3,4,5,6,7,8,9]

// console.log(Array.prototype.map.call(myArray,(items)=>items*2))

// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 3,
//     2: 4,
//   };
//   console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
 // [ 4, 9, 16 ]
  



// const string1= new String("hello world"); //object
// const string2= "hello world" ;              //primitive

// console.log(string1==string2); // true
// console.log(string1===string2); //false

// const now = new Date();
// console.log(now.valueOf())

// const myDate= new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.getFullYear())

// by recursions
//binary tree, linked tree, heaps we will be working with,graphs



//Stringmethods

// const myString = "My Dog jumped on the bed. My Dog is bad dog"

// const newString = myString.replaceAll("Dog","Cat")

// console.log(newString)

// const correctStr = myString.replaceAll(/[dD]{1}og/g,"Cat")
// console.log(correctStr)

// const myString = "some string";

// const newString = myString.toUpperCase()
// console.log(newString)














