import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

List<Map> myList = [
  {"name": "eyal", "img": "ttt.jfif", "hobby": "tech"},
  {"name": "shneur", "img": "ssss.jpg", "hobby": "footbul"}
];

class MyCard extends StatelessWidget {
  const MyCard(
      {Key? key, required this.name, required this.img, required this.hobby})
      : super(key: key);
  final name;
  final img;
  final hobby;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Card(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            ListTile(
              leading: Image.asset("$img"),
              title: Text("$name"),
              subtitle: Text('my name is $name and i like $hobby'),
            ),
          ],
        ),
      ),
    );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
          appBar: AppBar(
            title: const Text('Welcome to Flutter'),
          ),
          body: Column(children: [
            MyCard(
              name: myList[1]["name"],
              img: myList[1]["img"],
              hobby: myList[1]["hobby"],
            ),
            MyCard(
              name: myList[0]["name"],
              img: myList[0]["img"],
              hobby: myList[0]["hobby"],
            )
          ])),
    );
  }
}
