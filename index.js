// console.log("Hello People");
// alert("hello");


// create a javascript file, embedd the javascript file inside your html file and show an alert box saying, helloo everyone, welcome to my website













//redeclaring
// var a=3;//104 line

// var a=4; // 1024 line

// 3000 lines of code


//ES6 or modern javascript
// let a=2;
// a=3;//reassigning variables
// const b=2;
// b=5;//cannot be reassigned
// console.log(b);



// declare 3 varibales

// a=>using var 
// b=>using let
// c=>using const 

// redeclare every varibale 


// reassign every varibale 

// and at last print every varibales 





//set of instructions
//reusable piece of code using arguments
//we have to call this piece of code for it's execution

//param 1 and param 2 are called as arguments/parameters


// hello("hemlo","everyone")


// param=>"hemlo"
// param2=>"everyone"


// hello("gg","wp")







// function hello(param="asd",param2="awsdsdxcv"){
//  console.log(param,param2);
// }

// hello("Hemlo","everyone")
// hello("gg","wp")


// create a reusable function, name it anything you want and log the  dynamic output in the console


// hello("tyest","pppaaa");



// function hello() {
//     console.log("hemlo");
// }

// const hello = (arg1="asd",arg2="aaa")=>{
//     console.log(arg1,arg2);
// } 

// hello()



// declare an arrow functions with arguments/parameters and log the parameters/arguments in the console.also if no argument is given to the function, there should be a default value printed and not undefined


// const arrFun = (param="gg",param2="wp")=>{
//     console.log(param,param2);
// }

// arrFun();



// make a function to add 2 numbers

// do operations like 2+3

// do operations like 5+6

// do operations like 11+3

// log the output in teh console



// function add(a,c,...b) {
//     console.log(a,c,b);
// }
// a=>2
// b=>[3,45,6,7,8,8]
// add(2,3,45,6,7,8,8)
// add(2,3,6) gives NaN=>not a number because 2+3+6+undefined+undefined+undefined=Nan



// let a = "Hey"

// let b = "everyone,"

// let c = "how are you"

// let d = "All gucci"

// let e ="yuss"


// console.log(a+" "+b+" "+c+"? "+d+" => "+e);

// console.log(`${a} ${b} ${c}? ${d} => ${e}`);




// create 7 different varibales and combine them to make a single output that should be shown on the console




//we can iterate through the array and make a new array from it with manipulated elements

// 1st => Map,filter and reduce are mainly used used with arrays


//only the first argument/parameter is mandatory in map


// 1st argument => single individual element 

// 2nd argument=> index w.r.t array

// 3rd argument => array itself 


// const arr=[22,44,66,88]

// arr.map((ele)=>{
//         console.log(ele);
//     });
// arrIndex==[0,1 ,2 , 3 , 4 ,5]
// const a= arr.map((ele)=>{
//     return ele*10
// });

// console.log(a);





// objects
// const obj ={
//     name:"test",
//     class:'first',
//     rollNum:'001',
//     ar1:[],
//     obj1:{
//         username:'leo'
//     },
//     arr2:[
//         {leo:'1'}
//     ]
// };


// arrays=>[]
// objcts=>{}
//calling an object property==> output will be it's value 
// console.log(obj.obj1.username);


// calling an object inside an array
// console.log(obj.arr2[0].leo);





// create an object that contains name=>string, rollnumber=>number, subject=>array which contains different subjects


// Also, print name, rollNumber and subject array  value in seperate console

// 5 minutes 
//try mapping array of objects 


// const a=[{name:'asd'},{name:'test'},{name:'test1'}]


// a.map((ele)=>{
//     console.log(ele.name);
// })



//   given the data, try to map username and message available in the data, and log each of them in the console like

//   => "username message"


// a.map((ele)=>{
//     console.log(`${ele.message} ${ele.notificationTriggeredUser.username}`);
// })

// const a =[1,2,3,4,5,6];


// want to print those numbers which are greater than or equal to 4



// const b = a.filter((ele)=>{
// return ele>=4
// });

// console.log(b);


//   create an array which contains notificationtype property as newPostUpVote using filter method 


// const b= a.filter((ele)=>{
//     return ele.notificationtype==='newPostUpVote'
// })

// console.log(b);

let a =[1,2,3,4,5,6];

let b= a.reduce((h1,h2)=>{
    console.log(h1,h2);
    return h1+h2
})

console.log(b);

//there is an array => given 
//sum of all elements


// 1st=>

// h1=>1
// h2=>2

// 2nd

// h1=> 3
// h2=>3

// 3rd 

// h1=>6
// h2=>4

// 4th

// h1=>10
// h2=>5

// 5th
// h1=>15
// h2=>6

// 6th

// h1=> 21





// create 3 Html elements with the same function  onclick 
//create a function with arguments/parameters and pass this function to your element with different arguments and get the result and print it in console with arguments/parameters



// let a = document.getElementById('test');

// let b = document.getElementsByClassName('paraTwo')

// // console.log(b);

// function myFun(param1) {
//     console.log(param1);
// }

//create 3 elements shoudl be different ex:a,div,p,h1 with same classname and in the console just log the 1st element of the same classname

// a.addEventListener('click',function(){
//     myFun('hello')
// })

//create an element with an classname and add an event listerner "click" and execute a function which logs something in the console//

// note:don't use onclick in html
//note: there should be 2 elemnts with the same classname 


// create 2 elements with same classname and excute a function which takes 2 numbers in parameters/arguments and return the sum in console .

// Note: the function should execute on click 
// Note: don't use HTML onclick