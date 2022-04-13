import { Rentals } from "./Rentals";
export class TextStatement {
  display(rentals: Rentals, customerName: String): String {
    var result: String = "Rental Record for " + customerName + "\n";
    for (var rental of rentals) {
      result += "\t" + rental.movie.getTitle() + "\t" + rental.amount() + "\n";
    }
    result += "Amount owed is " + rentals.totalAmount(rentals) + "\n";
    result +=
      "You earned " +
      rentals.totalFrequentRenterPoints(rentals) +
      " frequent renter points";
    return result;
  }
}
