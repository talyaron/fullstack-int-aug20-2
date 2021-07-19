class Student {
  String name = '';
  double age = 0;

  Student(String this.name, this.age);
  void tellStudentAge() {
    print('${this.name} is ${this.age} years old');
  }
}

Student moses = Student('moses', 24);
void main() {
  List<Student> students = [];
  students.add(moses);
  students.add(Student('bella', 24));
  print(students);
  for (var student in students) student.tellStudentAge();
}
