import 'package:flutter/material.dart';
import 'dart:io';
import 'dart:convert' show utf8, jsonDecode;
import 'package:http/http.dart' as http;
import 'package:flutter/foundation.dart' show kIsWeb;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Chuck Norris Jokes',
      theme: ThemeData(
          brightness: Brightness.dark,
          primarySwatch: Colors.red,
          accentColor: Colors.greenAccent),
      home: MyHomePage(title: 'Chuck Norris Jokes'),
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
  int _counter = 0;
  String _joke = '';

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _getJoke() async {
    var url = Uri.parse('https://api.chucknorris.io/jokes/random');

    if (kIsWeb) {
      print('web....');
      // running on the web!
      var response = await http.get(url);

      if (response.statusCode == 200) {
        // If the server did return a 200 OK response,
        // then parse the JSON.
        print(response.body);
        print(jsonDecode(response.body));
        print(jsonDecode(response.body)['value']);

        setState(() {
          _joke = jsonDecode(response.body)['value'];
        });
      } else {
        // If the server did not return a 200 OK response,
        // then throw an exception.
        throw Exception('Failed to load ip address');
      }
    } else {
      // NOT running on the web! You can check for additional platforms here.
      var httpClient = HttpClient();
      var request = await httpClient.getUrl(url);
      var response = await request.close();
      var responseBody = await response.transform(utf8.decoder).join();

      setState(() {
        _joke = jsonDecode(responseBody)['origin'];
        ;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            GestureDetector(
              onTap: _getJoke,
              child: Image.asset('norris.jpeg'),
            ),
            Center(
              child: Padding(
                padding: EdgeInsets.all(20),
                child: Text(
                  '$_joke',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 30,
                    
                  ),
                ),
              ),
            ),
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
