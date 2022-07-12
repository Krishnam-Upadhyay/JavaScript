/*function f1(){
    console.log("This is function  1");

}
function f2(){
    console.log("This is function  2");

}
f1();
f4();
function makeOrder(){
    console.log("Here is your black coffee");

}
try {

    makeOrder();
    processOrder();
} catch (error) {
    console.log("Sorry, an error occureeed in you program");
    

}
finally{
    console.log("THis block will execute.No matter what !")
}*/
var a = 9;
if(a<10){
    throw new Error("This is the customizable error");

}
else{
    console.log("working fine!");
}