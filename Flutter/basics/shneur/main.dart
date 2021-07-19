// var
var d = 2;
double s = 2.4;
int i = 8;
String v = "hello";
bool isTrue = true;
List<int> arr = [1, 2, 3, 4, 5, 6];
List<dynamic> studentArr = [
  {"name": "moshe", "age": 34},
  {"name": "gad", "age": 17},
  {"name": "moshe", "age": 34}
];

// map

void main() {
  d = 5;
  print('my numbers d=${d} s=${s} i=${i} arr=${arr}');
  for (var student in studentArr) {
    // print(name);
    print("my name is ${student["name"]} my age is ${student["age"]}");
  }
}
