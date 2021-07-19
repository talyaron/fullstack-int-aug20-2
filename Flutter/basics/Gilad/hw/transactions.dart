import 'transaction.dart';

class Transactions {
  List transactions = <Transaction>[];

  Transactions(List<Transaction> this.transactions);

  void addTransaction(Transaction transaction) {
    this.transactions.add(transaction);
  }

  void printTransactions() {
    for (Transaction transaction in this.transactions) {
      print('${transaction.description}, ${transaction.amount}');
    }
  }
}
