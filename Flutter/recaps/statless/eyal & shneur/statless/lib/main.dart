import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

List<Map> myList = [
  {"name": "eyal", "img" :"ttt.jfif"},
  {"name": "shneur", "img" :"ssss.jpg"}
];

class MyCard extends StatelessWidget {
  const MyCard({Key? key, required this.name, required this.img}) : super(key: key);
  final name;
    final img;

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
              subtitle: Text('Music by Julie Gable. Lyrics by Sidney Stein.'),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                const SizedBox(width: 3),
                const SizedBox(width: 8),
              ],
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
          body: Column(
              children: [MyCard(name: myList[1]["name"], img: myList[1]["img"],), MyCard(name: myList[0]["name"], img: myList[0]["img"])])),
    );
  }
}
