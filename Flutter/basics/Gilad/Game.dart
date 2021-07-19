class Game {
  DateTime date = DateTime(2021, 06, 5);
  String rival = '';
  bool victory = true;
  String score = '';
  Game(DateTime this.date, String this.rival, bool this.victory, String score);
  void Lost() {
    print('${this.rival} Won');
  }
}

Game france = Game(new DateTime(221, 06, 5), 'Fracne', true, '2:0');
Game germany = Game(new DateTime(221, 06, 5), 'Germany', false, '1:2');
Game denemark = Game(new DateTime(221, 06, 5), 'Denemark', false, '1:2');
Game england = Game(new DateTime(221, 06, 5), 'Fracne', true, '4:3');
void main() {
  List<Game> games = [france, germany,denemark,england];

  for (var game in games) {
    if (!game.victory) {
        game.Lost();

    } 
  }
}
