class Transaction {
  String frome = "";
  String to = "";
  double amount = 0;
  bool income = true;
  String description = "";
  int id = 1;
  DateTime date = new DateTime(221, 06, 5);

  Transaction(this.frome, this.to, this.amount, this.income, this.description,
      this.id, this.date);
}

Transaction num1 = Transaction(
    "moshe", "yaakov", 167.4, true, "for the food", 26, new DateTime.now());

int transactionID = 1;

void main() {
  List<Transaction> transactions = [];
  transactions.add(Transaction(
      "moshe", "yaakov", 167.4, true, "for the food", 26, new DateTime.now()));
  void printTransaction() {
    for (Transaction transaction in transactions) {
      print(transactions[0]);
    }
    ;

  }
  printTransaction();
}


CraetTransactionID() => {transactionID = transactionID++};

// class Transactions (that stores all transactions)



// print all transactions

// 2) calculate total amount from start date to end date (method totalSum(startDate, endDate)), under class transactions


// 3) find transaction by date


// 4) find transactions by range of money transferd
