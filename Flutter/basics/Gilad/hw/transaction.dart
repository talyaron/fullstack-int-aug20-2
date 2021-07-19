class Transaction {
  String description = '';
  DateTime date = DateTime.now();
  double amount = 0;

  Transaction(String this.description,DateTime this.date,double this.amount);
}
