console.log("Welcome to my programm ");

var abc = {
    Name : "Kaushal",
    Subject: "JavaScript",
    Address : "Banglore"
}
console.log(abc);

function xyz(name,subject,address){
    this.name = name;
    this.address = address;
    this.subject = subject;
}
xyz.prototype.getName = function(){
    return this.name;
}
xyz.prototype.getAddress = function(){
    this.address;
}
xyz.prototype.grades = "A";
var x1 = new xyz("Krishnam","java","Earch");
console.log(x1);

var z1 = new xyz("Laptp","nava","Mars");
