//Problem - 1
document.write("Problem-1 - Simple interest"+"<br>")
var P = 43000;
var R= 30;
var T = 5;
var SI = P*T*R/100

document.write("The simple interest is :"+SI+'<br>')


//Problem - 2
document.write("----------------------------"+"<br>")
document.write("Problem-2 - Swap two numbers"+"<br>")

let a = 20;
let b = 30;

a = a + b 
b = a - b 
a = a - b 
document.write("a = "+a+ " and b = "+b+ '<br>')


//Problem - 3
document.write("----------------------------"+"<br>")
document.write("Problem-3 - Area and Circumference of a Circle"+"<br>")


var r;
const pi = 3.14;
r = parseInt(prompt("Enter value of radius"));
var area = pi*(Math.pow(r,2));
var circum = 2*pi*r;

document.write("Area of a Circle : "+area +'<br>');
document.write("Circumference of a Circle : "+circum+'<br>');


//Problem - 4
document.write("----------------------------"+"<br>")
document.write("Problem-4 - Addition of two number"+"<br>")


 let ab = 20;
 let bc = 9;
 let total = ab + bc;
 document.write("Total : "+total +'<br>');
 let cd = 49;
 let de = 5;
 let Total = cd+de;
 document.write("Total : "+Total +'<br>');

 //Problem -5
 document.write("----------------------------"+"<br>")
document.write("Problem-4 - Percentage"+"<br>")

var part , total_value ;
 part = parseInt(prompt("Enter value of part"));
 total_value = parseInt(prompt("Enter value of total"));
 var percentage = (part/total_value)*100;
 document.write("Percentage : "+percentage.toFixed(2)+'%'+'<br>');