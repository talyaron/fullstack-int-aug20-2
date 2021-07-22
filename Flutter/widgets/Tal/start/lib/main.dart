import 'package:flutter/material.dart';

class Student {
  String name = '';
  Color color = Colors.white;
  Student(this.name, this.color);
}

List<Student> data = [
  Student('dudi', Colors.pink),
  Student('Katya', Colors.red),
  Student('Shneur', Colors.blue),
  Student('Yehiel', Colors.blueGrey),
];

void main() {
  runApp(MyApp(students: data));
}

class MyApp extends StatelessWidget {
  final List<Student> students;

  MyApp({Key? key, required this.students}) : super(key: key);
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo 2',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
          backgroundColor: Colors.amber,
          appBar: AppBar(
            title: const Text('Sample Code'),
          ),
          body: Container(
            child: ListView.builder(
              itemCount: students.length,
              itemBuilder: (context, index) {
                return Container(
                  height: 50,
                  color: students[index].color,
                  child: Center(child: Text('${students[index].name}')),
                );
              },
              padding: const EdgeInsets.all(40),
            ),
          ),
          floatingActionButton: FloatingActionButton(
            onPressed: () => {},
            tooltip: 'Increment Counter',
            child: const Icon(Icons.add),
          ),
          bottomNavigationBar: BottomNavigationBar(
            items: const <BottomNavigationBarItem>[
              BottomNavigationBarItem(
                icon: Icon(Icons.home),
                label: 'Home',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.business),
                label: 'Business',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.school),
                label: 'School',
              ),
            ],
          )),
    );
  }
}
