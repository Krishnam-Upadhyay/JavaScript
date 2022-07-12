/*function one(){
    setTimeout(function(){
        console.log("Function 1");
        two();
    },3000)
  

}
function two(){
    console.log("Function 2");
}



one();*/
function person(friend){
   setTimeout(function(){
    console.log("my Friend's name s "+friend);
    person2();

   },3000);
}
function person2(){
    console.log("My name is Kaushal ");

}

person("Krishnam",person2);