import { Rental } from "./Rental";
import { Rentals } from "./Rentals";
export class TextStatement {
  display(rentals: Rentals, customerName: String): String {
    var result: string = "Rental Record for " + customerName + "\n";
     result+=rentals.reduce(function(res:string,rental:Rental)
     { return res+"\t" + rental.movie.getTitle() + "\t" + rental.amount() + "\n"},'');
     
    result += "Amount owed is " + rentals.totalAmount(rentals) + "\n";
    result +=
      "You earned " +
      rentals.totalFrequentRenterPoints(rentals) +
      " frequent renter points";
    return result;
  }
}
