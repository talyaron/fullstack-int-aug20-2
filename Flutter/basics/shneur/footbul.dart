class FootbullGame {
 String rival;
 bool won;
 int score;
 DateTime date = new DateTime(221, 06, 5);



FootbullGame(this.rival, this.won, this.score,  this.date);
}

 FootbullGame num1 = FootbullGame("holand", true, 10, new DateTime(2021, 06, 5));
 FootbullGame num2 = FootbullGame("italy", false, 8, new DateTime(2021, 06, 5));
 FootbullGame num3 = FootbullGame("israel", true, 4, new DateTime(2021, 06, 5));
 FootbullGame num4 = FootbullGame("usa", false, 6, new DateTime(2021, 06, 5));
 FootbullGame num5 = FootbullGame("poland", true, 2, new DateTime(2021, 06, 5));

 void main() {
   for (FootbullGame game in footbullGame){
     print(game);
   }
   
 }
