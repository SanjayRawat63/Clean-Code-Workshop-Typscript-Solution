import { Movie } from "./Movie";
export class Rental {
  daysRented: number;
  movie: Movie;

  constructor(movie: Movie, daysRented: number) {
    this.movie = movie;
    this.daysRented = daysRented;
  }

  getDaysRented = (): number => this.daysRented;
  getMovie = (): Movie => this.movie;
}
