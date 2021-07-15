class Student {
  String name = '';
  double age = 0;
  DateTime lastSeen = new DateTime.now();

  Student(this.name, this.age);

  void tellStudentAge() {
    print('${this.name} is ${this.age.toInt()} years old');
  }

  int parseIntStudentAge() {
    return this.age.toInt();
  }

  bool isYoung() {
    if (this.age < 20)
      return true;
    else
      return false;
  }
}

Student moses = Student('moses', 18);

void main() {
  List<Student> students = [];
  students.add(moses);

  students.add(Student('bella', 24));
  // students.add('dan');
  // print(students);

  for (Student student in students) {
    student.tellStudentAge();
    if (student.isYoung()) print('is young');
  }
}

// exercise from 19:30 to 19:50

//create record of the games of the Italian team
//class Game
// holds date of game (with type Date); rival team name, score (string); isWon
// go over the loop and say how many time the group won.
//when you run the loop, if the team lost to the other group, print the name of the rival group. (method)
