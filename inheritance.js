/*const Employee = {
    Post: function(){
        return "A software developer";
    },
    chagneName : function(name){
        this.name = name;
    }
};
var E1 = Object.create(Employee);
E1.name = "Krishnam";
E1.role = "Writer";
E1.chagneName("Ram");
console.log(E1);

var E1 = Object.create(Employee,{
    name:{value:"Krishnam"},
    role:{value:"Programmer"},

}) 
console.log(E1);
E1.changeName("Ram");*/
function Employee(name,id,salary){
    this.name = name;
    this.id = id;
    this.salary = salary;

}
Employee.prototype.post = function(){
    return (this.name+" "+"is a content creater");
}

var Krishnam = new Employee("Krishnam",34567,100000);
console.log(Krishnam);

function Programmer(name,id,salary,language){
    Employee.call(this,name,id,salary);
    this.language = language;



}
var Arun = new Programmer("arun",3456,120000,"JavaScript");
console.log(Arun);
console.log(studen.add())

