import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo 2',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'INT Aug20'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Color yellow = Colors.yellow;
  Color red = Colors.red;
  Color color = Colors.yellow;

  void _toggleColor() {
    setState(() {
      if (color == yellow) {
        color = red;
      } else {
        color = yellow;
      }
    });
  }

  void _detectMotion(details) {
    if (details.delta.dx > 0)
    print("Right");
  else
    print("Left");

  if (details.delta.dy > 0)
    print("Down");
  else
    print("Up");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
          child: Container(
        color: color,
        height: 200.0,
        width: 200.0,
        child: GestureDetector(onTap: _toggleColor, onPanUpdate: _detectMotion),
      )),
    );
  }
}
