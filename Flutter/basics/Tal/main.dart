//https://www.tutorialspoint.com/dart_programming/dart_programming_html_dom.htm

//number
import 'class.dart';

double x = 2;

//strings
String y = "2";
var e;

bool isTrue = true;

//List
List arr = [
  {'name': 'Avi', 'age': 12},
  {'name': 'Moses', 'age': 45},
  {'name': 'Bella', 'age': 56},
  {'name': 'Aka', 'age': 22},
];

//Map
var a = 'd';
// int b = 2;
Map obj = {a: 1, arr: 2};

//set
Set mySet = new Set.from(
    [1, 2, "hi", 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, "hi", 1, 1]);

void main() {
  x = 45.4;
  // print('x is equal to ${x}');
  // print(y);

  // for (var student in arr)
  //   print('${student['name']} is ${student['age']} years old');

  obj[34] = "hi";

  // print(obj);
  print(mySet);
  Student ruth = Student('ruth', 21);
  print(ruth.name);
}

//create an array of students with object of name and age.
// print all (for loop) students in the following mannar
// Moshe id 45 years old
