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
                // print(face['name']);
                setState(() => _face = face);
              },
            ),
          ),
          if (_face != null)
            MaterialPage(
                child: UserDetailsView(face: _face),
                key: UserDetailsView.valueKey)
        ],
        onPopPage: (route, result) {
          final page = route.settings as MaterialPage;

          if (page.key == UserDetailsView.valueKey) {
            _face = null;
          }

          return route.didPop(result);
        },
      ),
    );
  }
}

class Home extends StatelessWidget {
  final List<Map> _faces = [
    {
      "name": "Katya",
      "img": 'katya.jpg',
      "sentnece": 'כל סוף זאת התחלה חדשה'
    },
    {
      "name": "Eyal",
      "img":'eyal.jpg',
      "sentnece": 'אני פה לעבוד'
    },
    {
      "name": "Dudi",
      "img":'dudi.jpg',
      "sentnece": 'לפעמים החגיגה נגמרת'
    },
    {"name": "Yehial", "src": '', "sentnece": ''},
  ];

  var bottomNavItems = [
    BottomNavigationBarItem(icon: Icon(Icons.account_circle), label: 'Katya'),
    BottomNavigationBarItem(icon: Icon(Icons.hail), label: "Eyal"),
    BottomNavigationBarItem(icon: Icon(Icons.handyman), label: 'Dudi'),
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
            ));
          }),
      bottomNavigationBar: BottomNavigationBar(
        items: bottomNavItems,
        backgroundColor: Colors.lightBlue,
        onTap: (index) => didSelectFace(_faces[index]),
      ),
    );
  }
}

class UserDetailsView extends StatelessWidget {
  static const valueKey = ValueKey('UserDetailsView');

  final Map face;

  UserDetailsView({Key? key, required this.face}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('User Details'),
      ),
      body: Center(
        child: Column(children: <Widget>[
          Image.asset(face["img"]),
          Text('Hello, ${face["name"]}'),
          Text(face['sentnece'],
          style:TextStyle(fontWeight: FontWeight.bold, fontSize: 60),
          )
        ]),
      ),
    );
  }
}
