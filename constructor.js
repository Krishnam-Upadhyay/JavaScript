/*var car = {
    car_manufacturer:"Audi",
    car_model : "Q7",
    price : 50000,
    allwheeldrive : function()
    {
        return("This car comes with for whhel drive ");

    }

}

document.write(car.allwheeldrive());

function cars(car_manufacturer,car_model,price){
    this.car_manufacturer = car_manufacturer;
    this.car_model;
    this.price;
    this.alwheeldrive = function(){
        document.write("This car comes with for whhel drive ");

    } 

}
var c1 = new cars("Nissan","Q7",50000);
c1.price=60000;






var react2 = new onrejectionhandled();//var react1  = {};
react2.lenght = 5;
react2.width = 10;
react2.getarea = function(){
    return this.lenght*this.width;
}
react2.getperimeter = function(){
    return 2*this.lenght+2*this.width;
}
document.write("<h2>"+"THe paerimeter of rectangle is "+react2.getarea+"</h1>");*/


function react3(lenght,width){
    this.lenght = lenght;
    thid.width = width;
    this.getArea = function(){
        return length*width;

    }
    this.getParameter = function(){
        return 2*lenght+2*width;
    }
}

var r1 = new react3(5,10);
var s = r1.getArea();
document.write(s);





