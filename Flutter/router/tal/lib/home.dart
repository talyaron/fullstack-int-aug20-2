import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  
  final List<Map> _faces = [
    {"name": "Katya", "src": '', "sentnece": ''},
    {"name": "Eyal", "src": '', "sentnece": ''},
    {"name": "Dudi", "src": '', "sentnece": ''},
    {"name": "Yehial", "src": '', "sentnece": ''},
  ];

  final ValueChanged didSelectFace;

  Home({Key? key, required this.didSelectFace})

  @override
   Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:Text('Our faces :-)'),
       
      ),
       body:Center(child: Text('Hello'),),
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
       ),
    );
  }
}
