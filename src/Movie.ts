export class Movie {
  public static CHILDRENS = 2;
  public static REGULAR = 0;
  public static NEW_RELEASE = 1;

  title: String;
  priceCode: number;

  constructor(title: String, priceCode: number) {
    this.title = title;
    this.priceCode = priceCode;
  }

  getPriceCode = (): number => this.priceCode;
  setPriceCode = (arg: number): number => (this.priceCode = arg);
  getTitle = (): String => this.title;
}
