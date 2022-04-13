import { Movie } from "./Movie";
export class Rental {
  daysRented: number;
  movie: Movie;
  constructor(movie: Movie, daysRented: number) {
    this.daysRented = daysRented;
    this.movie = movie;
  }
  getDaysRented = () => this.daysRented;
  getMovie = () => this.movie;
  amount(): number {
    let thisAmount: number = 0;
    switch (this.movie.getPriceCode()) {
      case Movie.REGULAR: {
        thisAmount += 2.0;
        if (this.getDaysRented() > 2)
          thisAmount += (this.getDaysRented() - 2) * 1.5;
        break;
      }
      case Movie.NEW_RELEASE: {
        thisAmount += this.getDaysRented() * 3;
        break;
      }

      case Movie.CHILDRENS: {
        thisAmount += 1.5;
        if (this.getDaysRented() > 3)
          thisAmount += (this.getDaysRented() - 3) * 1.5;
      }
    }
    return thisAmount;
  }
  FrequentRenterPoints(): number {
    var frequentRenterPoints = 1;
    if (this.isBonusApplicable()) frequentRenterPoints++;
    return frequentRenterPoints;
  }
  private isBonusApplicable(): boolean {
    return (
      this.movie.getPriceCode() === Movie.NEW_RELEASE && this.daysRented > 1
    );
  }
}
