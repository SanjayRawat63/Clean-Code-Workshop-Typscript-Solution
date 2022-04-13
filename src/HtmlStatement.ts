import { Rentals } from "./Rentals";
export class HtmlStatement {
  display(rentals: Rentals, customerName: String): String {
    var result: String =
      "<h1>Rental Record for <b>" + customerName + "</b></h1><br>";
    for (var rental of rentals) {
      result += rental.movie.getTitle() + " " + rental.amount() + "<br>";
    }
    result += "Amount owed is <b>" + rentals.totalAmount(rentals) + "</b> <br>";
    result +=
      "You earned <b>" +
      rentals.totalFrequentRenterPoints(rentals) +
      "</b> frequent renter points";
    return result;
  }
}
