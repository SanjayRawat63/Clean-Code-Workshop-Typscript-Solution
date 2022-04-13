import { Rental } from "./Rental";

export class Rentals extends Array<Rental> {
  totalAmount = (rentals: Rentals) =>
    rentals.reduce(function (total, rental: Rental) {
      return total + rental.amount();
    }, 0);

  totalFrequentRenterPoints = (rentals: Rentals) =>
    rentals.reduce(function (total, rental: Rental) {
      return total + rental.FrequentRenterPoints();
    }, 0);
}
