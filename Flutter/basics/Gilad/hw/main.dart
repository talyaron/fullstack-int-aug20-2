import 'transaction.dart';

Transaction rent =
    Transaction('january rent', new DateTime(2021, 06, 01), 4700);
Transaction groceries =
    Transaction('rami levy groceries', new DateTime(2021, 06, 21), 690);
Transaction pub =
    Transaction('2 pints and chips', new DateTime(2021, 06, 27), 85);

void main() {
  List<Transaction> transactinos = [rent, groceries, pub];
  transactinos.StoreTransactions();
}
