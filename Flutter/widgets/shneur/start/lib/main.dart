import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // List<String> data = ['Dudi', 'Katay', 'Shneur'];
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(primarySwatch: Colors.red, hoverColor: Colors.yellow),
        home: Scaffold(
          appBar: AppBar(
            title: Text("my first app"),
            centerTitle: true,
            backgroundColor: Colors.yellow,
          ),
          drawer: Drawer(
            // Add a ListView to the drawer. This ensures the user can scroll
            // through the options in the drawer if there isn't enough vertical
            // space to fit everything.
            child: ListView(
              // Important: Remove any padding from the ListView.
              padding: EdgeInsets.zero,
              children: <Widget>[
                DrawerHeader(
                  decoration: BoxDecoration(
                    color: Colors.blue,
                  ),
                  child: Text('Drawer Header'),
                ),
                ListTile(
                  title: Text('Item 1'),
                ),
                ListTile(
                  title: Text('Item 2'),
                ),
              ],
            ),
          ),
      
          body: Center(
            child: Text("שלום לכולם"),
          ),
          floatingActionButton: FloatingActionButton(
            child: Center(
              child: Icon(Icons.policy),
            ),
            hoverColor: Colors.teal,
            onPressed: () => {},
          ),
        ));
  }
}
