// // // 1. Write a program to take a number in a variable, do the
// // required arithmetic to display the following result in your
// // browser:
// document.write("Result: <br>");
// var a = 10;
// document.write("The value of a is: " + a+"<br>");
// document.write("............................................... <br><br>");

// var num =++a;
// document.write("The value of ++a is: " + num+"<br>");
// document.write("Now the value of a is: " + num+"<br><br><br>");

// var newNum =a++;
// document.write("The value of a++ is: " +  newNum+"<br>");
// document.write("Now the value of a is: " +  a +"<br><br><br>");

// var a= --a;
// document.write("The value of --a is: " + num+"<br>");
// document.write("Now the value of a is: " + num+"<br><br><br>");

// var newNum =a--;
// document.write("The value of a-- is: " +  newNum+"<br>");
// document.write("Now the value of a is: " +  a +"<br><br><br>");


// // //2. What will be the output in variables a, b & result after
// // // execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// // --a is pre-decrement in this step the vallue of a will become 1
// document.write( "a is "  +a+"<br>");
// // --b is pre-decrement in this step the vallue of b will become 0
// document.write( "b is "  +b+"<br>");
// // the end result will become 3
// document.write( "result is "  +result);


// // // 3. Write a program that takes input a name from user &
// // // greet the user.

// // var name =prompt("Enter your name");
// // alert("Welcome to our site.");


// // 5. Write a program to take input a number from user &
// // display it’s multiplication table on your browser. If user
// // does not enter a new number, multiplication table of 5
// // should be displayed by default.
// var table = prompt(`Write a number to print table.`) || 5;
// document.write(`Table of ${table} <br/><br/>`);
// document.write(`${table} x 1 = ${table*1} </br>`);
// document.write(`${table} x 2 = ${table*2} </br>`);
// document.write(`${table} x 3 = ${table*3} </br>`);
// document.write(`${table} x 4 = ${table*4} </br>`);
// document.write(`${table} x 5 = ${table*5} </br>`);
// document.write(`${table} x 6 = ${table*6} </br>`);
// document.write(`${table} x 7 = ${table*7} </br>`);
// document.write(`${table} x 8 = ${table*8} </br>`);
// document.write(`${table} x 9 = ${table*9} </br>`);
// document.write(`${table} x 10 = ${table*10} </br>`);


// // 6. Take
// // a) Take three subjects name from user and store them in 3
// // different variables.
// // var sub1 =prompt("Enter the name of the first subject:");
// // var sub2 =prompt("Enter the name of the second subject:");
// // var sub3 = prompt("Enter the name of the third subject:");

// // // // b) Total marks for each subject is 100, store it in another
// // // variable.
// // var totalMarks =100;

// // // c) Take obtained marks for first subject from user and
// // // stored it in different variable.
// // var obtMarks1 = prompt(`Enter obtained marks for ${sub1}:`);

// // // d) Take obtained marks for remaining 2 subjects from user
// // // and store them in variables.
// // var obtMarks2 = prompt(`Enter obtained marks for ${sub2}:`);
// // var obtMarks3 = prompt(`Enter obtained marks for ${sub3}:`);

// // // e) Now calculate total marks and percentage 
// // var totalobtMarks = +obtMarks1 + +obtMarks2 + +obtMarks3;
// // var per1 = (+obtMarks1 / totalMarks) * 100;
// // var per2 = (+obtMarks2 / totalMarks) * 100;
// // var per3 = (+obtMarks3 / totalMarks) * 100;
// // var percentage = (totalobtMarks / (totalMarks * 3)) * 100; 
// // var totalSubmarks = totalMarks * 3;

// // // show the result in browser
// // document.write(`   <table>
// // <tr>
// //     <th>Subject</th>
// //     <th>Total Maks</th>
// //     <th>Obtained Marks</th>
// //     <th>Parcentage</th>
// // </tr>    
// // <tr>
// //      <td>${sub1}</td> 
// //      <td>${totalMarks }</td>
// //      <td>${obtMarks1}</td> 
// //      <td>${ per1}%</td>
// // </tr>   
// // <tr>
// //        <td>${sub2}</td> 
// //        <td>${totalMarks }</td>
// //        <td>${obtMarks2}</td>
// //        <td>${ per2}%</td>
// // </tr>    
// // <tr>
// //         <td>${sub3}</td> 
// //         <td>${totalMarks }</td>
// //         <td>${obtMarks3}</td>
// //         <td>${ per3}%</td>
// // </tr>        
// // <tr style="text-align: center;">
// //          <td></td> 
// //          <td><b>${totalSubmarks }</b></td>
// //          <td><b>${ totalobtMarks}</b></td> 
// //          <td><b>${ percentage}%</b></td> 
// // </tr>
// // </table>`);