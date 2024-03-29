import 'dart:ui';

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
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
  int index = 0;
  List<Map> ourMemes = [
    {
      "text": "aaaaa",
      "img":
          "data:image/jpeg;base64,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"
    },
    {
      "img":
          "https://th.bing.com/th/id/OIP.a0oQNm7-L7uN3KqIk_cZegHaG0?pid=ImgDet&rs=1"
    },
    {
      "img":
          "https://th.bing.com/th/id/OIP.ynot18Ib93OY3dVe5khPfwHaFL?pid=ImgDet&rs=1"
    }
  ];
  void _nextMeme() {
    setState(() {
      index++;
      if (index > ourMemes.length - 1) {
        index = 0;
      }
    });
  }

  void _lastMeme() {
    setState(() {
      index--;
      if (index < 0) {
        index = ourMemes.length - 1;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              child: Stack(
                children: <Widget>[
                  Image.network(ourMemes[index]["img"],
                      width: 300, height: 200, fit: BoxFit.fill),
                  Positioned(
                    top: 80.0,
                    child: ElevatedButton(
                      style: ButtonStyle(
                          shape:
                              MaterialStateProperty.all<RoundedRectangleBorder>(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(18.0),
                        ),
                      )),
                      child: Icon(Icons.arrow_back),
                      onPressed: _lastMeme,
                    ),
                  ),
                  Positioned(
                    top: 80.0,
                    right: 0,
                    child: ElevatedButton(
                      style: ButtonStyle(
                          shape:
                              MaterialStateProperty.all<RoundedRectangleBorder>(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(18.0),
                        ),
                      )),
                      child: Icon(Icons.arrow_forward),
                      onPressed: _nextMeme,
                    ),
                  ),
                  Indicator(index),
                ],
              ),
            ),
            Draggable(
              child: Glass(),
              feedback: Container(
                child: Glass(),
              ),
              childWhenDragging: Container(),
            ),
          ],
        ),
      ),
    );
  }
}

class Indicator extends StatelessWidget {
  Indicator(this.myData);
  final int myData;
  @override
  Widget build(BuildContext context) {
    return Text(" תמונה מס. ${myData + 1}");
  }
}

class Glass extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(20.0),
      child: Container(
        width: 100.0,
        height: 100.0,
        child: Stack(
          children: [
            BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 7.0, sigmaY: 7.0),
              child: Container(
                width: 20.0,
                height: 20.0,
              ),
            ),
            Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20.0),
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [
                    Colors.blue.shade100.withOpacity(0.5),
                    Colors.blue.shade100.withOpacity(0.2)
                  ],
                  stops: [0.0, 1.0],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
