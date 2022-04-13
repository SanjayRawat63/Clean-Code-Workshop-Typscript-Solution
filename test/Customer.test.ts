import { Movie } from "../src/Movie";
import { Customer } from "../src/Customer";
import { Rental } from "../src/Rental";

describe("Customer Test", () => {
  it("should Check for TextStatement", () => {
    const customer = new Customer("Sanju");
    customer.addRental(
      new Rental(new Movie("Kashmiri Files", Movie.REGULAR), 3)
    );
    customer.addRental(new Rental(new Movie("RRR", Movie.CHILDRENS), 4));
    customer.addRental(new Rental(new Movie("KGF-2", Movie.NEW_RELEASE), 2));
    expect(customer.textStatement()).toBe(
      "Rental Record for Sanju\n" +
        "\tKashmiri Files\t3.5\n" +
        "\tRRR\t3\n" +
        "\tKGF-2\t6\n" +
        "Amount owed is 12.5\n" +
        "You earned 4 frequent renter points"
    );
  });

  it("should Check for htmlStatement", () => {
    const customer = new Customer("Sanju");
    customer.addRental(
      new Rental(new Movie("Kashmiri Files", Movie.REGULAR), 3)
    );
    customer.addRental(new Rental(new Movie("RRR", Movie.CHILDRENS), 4));
    customer.addRental(new Rental(new Movie("KGF-2", Movie.NEW_RELEASE), 2));
    expect(customer.htmlStatement()).toBe(
      "<h1>Rental Record for <b>Sanju</b></h1><br>" +
        "Kashmiri Files 3.5<br>" +
        "RRR 3<br>" +
        "KGF-2 6<br>" +
        "Amount owed is <b>12.5</b> <br>" +
        "You earned <b>4</b> frequent renter points"
    );
  });
});
