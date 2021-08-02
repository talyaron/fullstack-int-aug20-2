import 'package:flutter/material.dart';

void main() {
  runApp(MyFace());
}

class MyFace extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _MyFaceState();
}

class _MyFaceState extends State<MyFace> {
  var _face = null;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Navigator(
        pages: [
          MaterialPage(
            child: Home(
              didSelectFace: (face) {
                setState(() => _face = face);
              },
            ),
          ),
          if (_face != null)
            MaterialPage(
                child: UserDetailsView(user: _face),
                key: UserDetailsView.valueKey)
        ],
      ),
    );
  }
}

class Home extends StatelessWidget {
  final List<Map> _faces = [
    {"name": "Katya", "src": '', "sentnece": ''},
    {"name": "Eyal", "src": '', "sentnece": ''},
    {"name": "Dudi", "src": '', "sentnece": ''},
    {"name": "Yehial", "src": '', "sentnece": ''},
  ];

  var bottomNavItems = [
    BottomNavigationBarItem(icon: Icon(Icons.account_circle), label: 'Katya'),
    BottomNavigationBarItem(icon: Icon(Icons.hail), label: "Eyal"),
    BottomNavigationBarItem(icon: Icon(Icons.handyman), label: 'Dudi'),
    // BottomNavigationBarItem(icon: Icon(Icons.account_circle), label: "Yehial"),
  ];

  final ValueChanged didSelectFace;

  Home({Key? key, required this.didSelectFace});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Our faces :-)'),
      ),
      body: ListView.builder(
          itemCount: _faces.length,
          itemBuilder: (context, index) {
            final face = _faces[index];
            return Card(
                child: ListTile(
              title: Text(face['name']),
              onTap: () => didSelectFace(face),
            ));
          }),
      bottomNavigationBar: BottomNavigationBar(
        items: bottomNavItems,
        backgroundColor: Colors.lightBlue,
        onTap: (index) {},
      ),
    );
  }
}

class UserDetailsView extends StatelessWidget {
  static const valueKey = ValueKey('UserDetailsView');

  final String user;

  UserDetailsView({Key? key, required this.user}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text('User Details')),
        body: Center(child: Text('Hello, $user')));
  }
}
