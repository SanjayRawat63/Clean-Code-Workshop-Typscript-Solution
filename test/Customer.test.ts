import { Rental } from "../src/Rental";
import { Movie } from "../src/Movie";
import { Customer } from "../src/Customer";
describe("Customer Test", () => {
  it("shouldCheckIfCustomerStatementIsCorrect", () => {
    const customer = new Customer("Sanjay");
    customer.addRental(
      new Rental(new Movie("Kashmiri Files", Movie.REGULAR), 3)
    );
    customer.addRental(new Rental(new Movie("RRR", Movie.CHILDRENS), 4));
    customer.addRental(new Rental(new Movie("KGF-2", Movie.NEW_RELEASE), 2));
    expect(
      "Rental Record for Sanjay\n" +
        "\tKashmiri Files\t3.5\n" +
        "\tRRR\t3\n" +
        "\tKGF-2\t6\n" +
        "Amount owed is 12.5\n" +
        "You earned 4 frequent renter points"
    ).toBe(customer.statement());
  });
});
