import { Rental } from "./Rental";
import { Rentals } from "./Rentals";
export class HtmlStatement {
  display(rentals: Rentals, customerName: String): String {
    var result: string =
      "<h1>Rental Record for <b>" + customerName + "</b></h1><br>";
    result+=rentals.reduce(function(res:string,rental:Rental) {return res+ rental.movie.getTitle() + " " + rental.amount() + "<br>"},'');
    
    result += "Amount owed is <b>" + rentals.totalAmount(rentals) + "</b> <br>";
    result +=
      "You earned <b>" +
      rentals.totalFrequentRenterPoints(rentals) +
      "</b> frequent renter points";
    return result;
  }
}
