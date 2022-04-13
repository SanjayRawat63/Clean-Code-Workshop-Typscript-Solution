import { Rental } from "./Rental";
import { TextStatement } from "./TextStatement";
import { HtmlStatement } from "./HtmlStatement";
import { Rentals } from "./Rentals";
export class Customer {
  name: String;
  rentals = new Rentals();
  addRental(rental: Rental) {
    this.rentals.push(rental);
  }
  constructor(name: String) {
    this.name = name;
  }
  textStatement(): String {
    return new TextStatement().display(this.rentals, this.name);
  }
  htmlStatement(): String {
    return new HtmlStatement().display(this.rentals, this.name);
  }
}
