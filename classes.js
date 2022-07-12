class Student{
    constructor(name,age,roll){
    this.name = name;
    this.age = age;
    this.roll = roll;
    }
    Org(){
        return("I am "+this.name+"from TUtoriel");
    }
    dob(){
        return("The date of Birth of "+this.name+(2022-this.age));

    }
    static add(a,b){
        return a+b;

    }

}
var Krishnam = new Student("Krishnam",21,45);
console.log(Krishnam);
console.log(Student.add(10,45));




class Student2 extends Student{
    constructor(name,age,roll,language,section){
        super(name,age,roll);
        this.language= language;
        this.section = section;

    }
}
var Arun = new Student2("Arun",35,2,"JavaScript","A");
console.log(Arun);


