// //Data Types
// //Primitive DataTypes
// //String
// const text = "Krishnam";
// //Number
// const number = 45;
// //Boolean
// let vlaue1 = true;
// let vlaue2 = false;
// //Null
// const result = null;
// //Undefined
// let name;
// //Symbol(ES6)
// console.log(typeof text);
// console.log(typeof true);
// console.log(typeof number);
// console.log(vlaue1);
// console.log(vlaue2);
// console.log(result);
// console.log(name);

// //Array
// const friend1 = "anna";
// const friend2 = "anna";
// const friend3 = "anna";
// const friends = ["john","peter","bob","susy",45,undefined,null]

// let bestFriend = friends[2];
// friends[4] = 'anna';
// console.log(friends[4]);
// console.log(friends);
// console.log(bestFriend);

// console.log(friends[3]);



//FUNTIONS*********************************************************


// function helloBob(){
//     console.log("Hello There Bob");
  

// }
// function helloAnna(){
    
//     console.log("Hellow There Anna");
 

// }
// function greet(name){
  
//     console.log("Hello There "+name);
// }

// //greet bob
// greet("Bob")
// //greet anna
// greet("Anna");
// //greet susy
// greet("Susy");

// const wallHeight = 80;
// function calculate(value){

    
//     return value * 2.54;



// }

// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions =[width,height];
// console.log(dimensions);

// console.log(dimensions);
// const firstValue = addValues(3,4);
// const secondValue = addValues(12,34);

// const values =[firstValue,secondValue];
// console.log(values)=[firstValue,secondValue];


// const add =function(num1,num2){
//     return num1 + num2;
// }

// const multiply = (num1,num2)=>num1+num2;

// console.log(multiply(3,4));

/* const person = {
    name:'Krishnam',
    lastName:"Upadyay",
    age:40,
    education:false,
    married:true,
    siblings:['anna','suasan','peter'],
    greeting:function(){
        console.log("Hello my name is John");

    }







};

console.log(person.name);
console.group(person.siblings[2]);
person.greeting();
const age=person.age;
console.log(persononame);

 */

//CONDTIONAL STATEMENTS*********************************************************


// const value = 2>1;


// const value2 = false;

/* const num1 = 4;
const num2 = 6;


if(num1>num2){
    console.log("Hfirst number is bigger than second");


}
elsif(num1==num2){
    console.log("Numbers are equial");
}else
{


    console.log("the second number is bigger than first");
}
 */

// const dice =1;
// if(dice ===1){
//     console.log("you got one")
// }
// if(dice ===2){
//     console.log('you got two');
// }



//SWITCH STATEMENT  ********************************************
/* const dice =6;
switch(dice){
    case 1:
        console.log('you got one');
        break;
    case 2:
        console.log('you got two');
        break;   
    case 3:
        console.log("You got 3");
        break;
    default:
        console.log("you did not get anything") ; 


} */

//LOOPS**************************************************************************


//WHILE LOOP
/* let amount = 10;
while(amount>0){
    console.log('I have'+amount+'dollars and i');
    amount--;
}

 */


//DO WHILE LOOP

/* let money = 0;
do{
    console.log("You have "+money + " dollars");
    money++;
}while(money<10); */


//FOR LOOPS
/* 
let i;
for(i=0;i<10;i++){
    console.log('and the number is: '+i);
}
 */

/* for(let number = 11;number>=0;number--){
    console.log('and the number is: '+number);

} */


//STRING PROPERTIES AND METHODS *************************************************************************


/* let text = "Peter Jordan";
const person={
    name:'peter',
    greeting(){
        console.log("'hey, i'm peter");
    }


} */


//String.length Property
/* 
let text = 'Krishnam Upadhyay';
let result = text.length;
console.log(result);
console.log(text.length);

//ToLowerCase() method

console.log(text.toLocaleLowerCase());

//ToUpperCase() method
console.log(text.toUpperCase());

//charat(index)

console.log(text.charAt(12));
console.log(text.charAt(15));
console.log(text.charAt(text.length-1));

//indexOf() method

console.log(text.indexOf("y"));

//trim
console.log(text.trim());

//startswith()

console.log(text.startsWith("krishnam"));

//trim
console.log(text.trim().toLocaleLowerCase().startsWith("krishnam"));

//include()

console.log(text.includes("rishnam"));


//slice(0,2);

console.log(text.slice(0,2));
console.log(text.slice(3,-2));
 */

//LITEREALS ********************************************************************


/* const name ='john';
const age = 25;
const sentence ="hey it's"+name+name+" and he is"+age+"years old";
const value = `Hey good afternoon ${name} Your age ${age} and message is ${sentence}`;
console.log(value);

 */


//ARRAY PROPERTIES AND METHODS

/* let names = ['john','bobo','barry','olga','ben',3,4,5,3,3];
console.log(names);

//length
console.log(names.length);

//Accescing last element with lenght property
console.log(names[names.length-1]);

//concat
const lastNames = ['pepper','onion','banana'];
const allNames = names.concat(lastNames);
console.log(allNames);


//Reverse() method

console.log(allNames.reverse());
console.log(allNames)

//unshift

allNames.unshift('susy');


//shift

allNames.shift("Krihnam");
console.log(allNames);

//push

allNames.push("Krishnam");
console.log(allNames);
//pop

console.log(allNames.pop());

//splice - Mutates original array

const speicificNames = allNames.splice(2,4)
console.log(speicificNames);
console.log(allNames); */


//ARRAY AND FOR LOOPS *****************************************

/* const names =['anna','susy','bob',"Krishnam","Monika"];

const lastName = 'shakeandbake';
let newArray =[];

//for loop
for(let i = 0;i<names.length;i++){
    console.log(names[i]);
    const fullName = `@{names[i]}m${lastName}`;
    console.log(fullName);
    newArray.push(fullName);
    

}
console.log(names);
console.log(newArray);
 */

//GLobal Scopes *****************************************************************

/* let name ='Krishnam';
name="Peter";

console.log(`my name is ${name} and I'am awsome`);

function calculate(){
    console.log(name);
    name ='orange';
}
calculate();
if(true){;
   
    name ='orange';
    function inner(){
        name = 'inner name value'
        console.log('this is from inner function ${name}');

    }
    inner();
}

 */

//LOCAL SCOPE*********************************************

/* let name ='Krishnam';
function calculate(){
    const name ="Krishnam";
    const age = 25;
    becomesGlobal = 'global variable';


}
calculate();
console.log(becomesGlobal);

if(true){

}
console.log(`my name is ${name} and i'm awesome` );


 */

//VARIABLE LOOKUP *******************************************
/* 
const globalNumber = 5;
function add(num1,num2){
    const globalNumber = 20;
    const result = num1+num2+globalNumber ;
    function multiply(){
        //const globalNumber=100
        const multiplyResult = result + globalNumber;
        console.log(multiplyResult);

    }
    multiply();
    return result;

}
console.log(add(4,3));
 */



//CALLBACK FUNCTION

/* unction greetMorning(name){
ction greetMAfternoon(name,myName){
    const myName ='john';
    console.log(`Good fternoon( ${name}, my name is ${myName}`);

}

greetMorning('Krishnam');
greetMAfternoon('Monika',"Krishnam");


    const myName ='john';
    console.log(`Good morning ${name}, my name is ${myName}`);

}
fun */


//DOM **********************************************************************************************


// console.dir(document);



//getElementById

/* const h1 = document.getElementById('title');
h1.style.color = 'red';


const btn = document.getElementById('')

 */


//getElementByTagname ****************************************************

/* const headings = document.getElementsByTagName('h2');
headings[0].style.color ='red';
//console.log(headings.lend)

const items = document.getElementsByTagName('li');
 

const betterItems = [...items];
betterItems.forEach(function(item){
    console.log(item)
});

items[2].style.color='orange';

const listItems = document.getElementsByClassName('special');
console.log(listItems);

 */

/* const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click',function(){
    heading.classList.add('red');

})

btn.addEventListener('')
 */













