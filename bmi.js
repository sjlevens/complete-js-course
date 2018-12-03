/***********
 * BMI = mass / height^2, mass in kg, height in m
 * 
 * */

var name1 = prompt('Who is the first person?');
var name2 = prompt('Who is the second?');

var weight1 = prompt('What is ' + name1 + '\'s weight in kg?');
var height1 = prompt('What is ' + name1 + '\'s height in m?');

var weight2 = prompt('What is ' + name2 + '\'s weight in kg?');
var height2 = prompt('What is ' + name2 + '\'s height in m?');

var bmi1 = weight1 / (height1 ^ 2);
var bmi2 = weight2 / (height2 ^ 2);

var fatty = bmi1 > bmi2 ? name1 : name2;
alert(fatty + ' is a fatty!');

console.log(name1, weight1, height1, bmi1, name2, weight2, height2, bmi2);


