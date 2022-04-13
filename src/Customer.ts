import { Rental } from "./Rental";
import { Movie } from "./Movie";
export class Customer {
  name: String;
  rentals: Array<Rental> = Array();
  addRental = (rental: Rental) => {
    this.rentals.push(rental);
  };
  constructor(name: String) {
    this.name = name;
  }

  statement = (): String => {
    let totalAmount: number = 0.0;
    let frequentRenterPoints: number = 0;
    let result: String = "Rental Record for " + this.name + "\n";
    for (let rental of this.rentals) {
      let thisAmount: number = 0.0;
      switch (rental.getMovie().getPriceCode()) {
        case Movie.REGULAR: {
          thisAmount += 2.0;
          if (rental.getDaysRented() > 2)
            thisAmount += (rental.getDaysRented() - 2) * 1.5;
          break;
        }
        case Movie.NEW_RELEASE: {
          thisAmount += rental.getDaysRented() * 3;
          break;
        }
        case Movie.CHILDRENS: {
          thisAmount += 1.5;
          if (rental.getDaysRented() > 3)
            thisAmount += (rental.getDaysRented() - 3) * 1.5;
          break;
        }
      }
      // add frequent renter points
      frequentRenterPoints++;
      // add bonus for a two day new release rental
      if (
        rental.getMovie().getPriceCode() == Movie.NEW_RELEASE &&
        rental.getDaysRented() > 1
      )
        frequentRenterPoints++;

      //show figures for this rental
      result += "\t" + rental.getMovie().getTitle() + "\t" + thisAmount + "\n";
      totalAmount += thisAmount;
    }

    //add footer lines result
    result += "Amount owed is " + totalAmount + "\n";
    result += "You earned " + frequentRenterPoints + " frequent renter points";
    return result;
  };
}
