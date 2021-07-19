var x = 2;

Map giald = {'name': 'giald', "age": 31};
Map eyal = {'name': 'eyal', "age": 31};
Map noa = {'name': 'eyal', "age": 31};
Map tal = {'name': 'eyal', "age": 31};
int a = 2;
int b = 3;
List students = [giald, eyal, noa, tal];
Set mySet = new Set.from([1, 2, 4, 1, 3]);

void main() {
  for (var student in students)
    print(' name: ${student['name']} age:${student['age']}');
  print(mySet);
}
