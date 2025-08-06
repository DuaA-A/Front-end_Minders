// Q1
// var n = prompt("input: ");
// alert("ouput: " + n);
// -------------------------------------

// Q2
// var n = prompt("input: ");
// if(n%3===0&&n%4===0)
//     alert("Yes");
// else
//     alert("No");
// -------------------------------------

// Q3
// var input = prompt("input: ");
// var numbers = input.split(" ");
// alert(numbers[0]>numbers[1]? numbers[0]: numbers[1]);
// -------------------------------------

// Q4
// var n = prompt("input: ");
// alert(n<0?"negative":"positive");
// -------------------------------------

// Q5
// var input = prompt("input: ");
// var numbers = input.split(" ");
// var max, min;
// if(numbers[0]>numbers[1]&&numbers[0]>numbers[2]){
//     max=numbers[0];
//     min= numbers[1]<numbers[2]? numbers[1]:numbers[2];
// }
// else if(numbers[1]> numbers[0]&&numbers[1]>numbers[2]){
//     max=numbers[1];
//     min= numbers[0]<numbers[2]? numbers[0]:numbers[2];
// }
// else{
//     max=numbers[2];
//     min= numbers[1]<numbers[0]? numbers[1]:numbers[0];
// }
// alert("max is: "+max+ "\nmin is: " + min);
// -------------------------------------

//Q6
// var n = prompt("input: ");
// if(n%2==0)
//     alert("even");
// else
//     alert("odd");
// -------------------------------------

// Q8
// var char = prompt("input: ");
// if(char=='o'||char=='e'||char=='a'||char=='i'||char=='u'||
//     char=='O'||char=='A'||char=='E'||char=='I'||char=='U')
//     alert("vowel");
// else
//     alert("constant");
// -------------------------------------

// Q9
// var n = prompt("input: ");
// var numbers=[];
// for(var i=1;i<=n;i++)
//     numbers.push(i);
// alert(numbers.join(" "));
// -------------------------------------

// Q10
// var n = prompt("input: ");
// var numbers=[];
// for(var i=1;i<=12;i++)
//     numbers.push(i*n);
// alert(numbers.join(" "));
// -------------------------------------

// Q11
// var n = prompt("input: ");
// var numbers=[];
// for(var i=2;i<=n;i++)
//     if(i%2==0)
//         numbers.push(i);
// alert(numbers.join(" "));
// -------------------------------------

// Q12 !
// var input = prompt("input: ");
// var numbers = input.split(" ");

// alert(Math.pow(numbers[0], numbers[1]));

// -----OR-----

// var output=1;
// while(numbers[1]--)
//     output*=numbers[0];
// alert("output: "+ output);
// -------------------------------------


// Q12 !!
// var input = prompt("Enter Marks of five subjects: ");
// var numbers = input.split(" ");
// var total = parseFloat(numbers[0]) + parseFloat(numbers[1]) +
//     parseFloat(numbers[2]) + parseFloat(numbers[3]) + parseFloat(numbers[4]);
// var average = total / 5;
// var percentage = (total / 500) * 100;
// alert("Total marks = " + total + "\nAverage Marks = " + average + "\nPercentage = " + percentage.toFixed(2));
// -------------------------------------

// Q13
// var monthNumber = parseInt(prompt("Month Number:"));
// var daysInMonth;
// switch(monthNumber) {
//     case 1: 
//     case 3: 
//     case 5: 
//     case 7: 
//     case 8: 
//     case 10:
//     case 12:
//         daysInMonth = 31;
//         break;
//     case 4: 
//     case 6: 
//     case 9: 
//     case 11:
//         daysInMonth = 30;
//         break;
//     case 2: 
//         var year = parseInt(prompt("Enter the year:"));  
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) 
//             daysInMonth = 29; 
//         else 
//             daysInMonth = 28;  
//         break;
//     default:
//         alert("Invalid month number! Please enter a number between 1 and 12.");
//         break;
// }
// if (daysInMonth) 
//     alert("Days in Month: " + daysInMonth);
// -------------------------------------

// Q14
// var physics = parseFloat(prompt("marks for Physics:"));
// var chemistry = parseFloat(prompt("marks for Chemistry:"));
// var biology = parseFloat(prompt(" marks for Biology:"));
// var mathematics = parseFloat(prompt(" marks for Mathematics:"));
// var computer = parseFloat(prompt(" marks for Computer:"));
// var totalMarks = physics + chemistry + biology + mathematics + computer;
// var percentage = (totalMarks / 500) * 100;
// var grade;
// if(percentage >= 90) 
//     grade = "A";
// else if(percentage >= 80)
//     grade = "B";
// else if(percentage >= 70)
//     grade = "C";
// else if(percentage >= 60) 
//     grade = "D";
// else if(percentage >= 40) 
//     grade = "E";
// else
//     grade = "F";
// alert("total marks = " + totalMarks + "\npercentage = " + percentage.toFixed(2) + "%\ngrade = " + grade);
// -------------------------------------

// Q15
// just like Q13
// -------------------------------------

//Q16
// var char = prompt("input:");
// switch(char.toLowerCase()){
    //     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         alert(char + " is a Vowel.");
//         break;
//     default:
//         alert(char + " is a Consonant.");
//         break;
// }
// -------------------------------------

// Q17
// var num1 = parseFloat(prompt("first number:"));
// var num2 = parseFloat(prompt("second number:"));
// switch(true){
//     case (num1>num2):
//         alert(num1 + " is greater.");
//         break;
//     case (num1<num2):
//         alert(num2 + " is greater.");
//         break;
//     default:
//         alert("equal.");
//         break;
// }
// -------------------------------------

// Q18
// var n = parseInt(prompt("input:"));
// switch(n%2){
//     case 0:
//         alert(n + " even.");
//         break;
//     default:
//         alert(n + " odd.");
//         break;
// }
// -------------------------------------

//Q19
// var n = parseInt(prompt("input:"));
// switch(true){
//     case (n > 0):
//         alert(n + " positive.");
//         break;
//     case (n < 0):
//         alert(n + " negative.");
//         break;
//         default:
//             alert("the number is Zero");
//         break;
// }
// -------------------------------------

// Q20
// var num1 = parseFloat(prompt("first number:"));
// var num2 = parseFloat(prompt("second number:"));
// var operator = prompt("Enter operator (+, -, *, /):");
// switch(operator){
//     case '+':
//         alert("Result: "+(num1+num2));
//         break;
//     case '-':
//         alert("Result: "+(num1-num2));
//         break;
//     case '*':
//         alert("Result: "+(num1*num2));
//         break;
//     case '/':
//         if (num2===0)
//             alert("division by zero.");
//         else 
//             alert("Result: " + (num1/num2));
//         break;
//     default:
//         alert("Invalid operator! Please enter +, -, *, or /");
//         break;
// }

function sum(a, b) { 
    return a + b;
}
sum(2, 3); // arguments

function greet(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(greet()); // Hello, Guest

console.log(factorial(5)); 

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

sayHi(); 
const sayHi = function() {
    console.log("Hello");
};