export class Movie {
  public static CHILDRENS: number = 2;
  public static REGULAR: number = 0;
  public static NEW_RELEASE: number = 1;
  title: String;
  priceCode: number;
  constructor(title: String, priceCode: number) {
    this.title = title;
    this.priceCode = priceCode;
  }
  getPriceCode = () => this.priceCode;
  setPriceCode = (arg: number) => (this.priceCode = arg);
  getTitle = () => this.title;
}
